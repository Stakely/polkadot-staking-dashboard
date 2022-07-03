// Copyright 2022 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { useState, useEffect } from 'react';
import { useModal } from 'contexts/Modal';
import { useBalances } from 'contexts/Balances';
import { useApi } from 'contexts/Api';
import { useConnect } from 'contexts/Connect';
import { BondInputWithFeedback } from 'library/Form/BondInputWithFeedback';
import { useSubmitExtrinsic } from 'library/Hooks/useSubmitExtrinsic';
import { ConnectContextInterface } from 'types/connect';
import { useActivePool } from 'contexts/Pools/ActivePool';
import { ActivePoolContextState } from 'types/pools';
import { planckBnToUnit, unitToPlanckBn } from 'Utils';
import { BalancesContextInterface, BondOptions } from 'types/balances';
import { NotesWrapper } from '../../Wrappers';
import { FormFooter } from './FormFooter';

export const BondSome = (props: any) => {
  const { setSection } = props;

  const { api, network } = useApi();
  const { units } = network;
  const { setStatus: setModalStatus, setResize, config } = useModal();
  const { activeAccount, accountHasSigner } =
    useConnect() as ConnectContextInterface;
  const { getBondOptions } = useBalances() as BalancesContextInterface;
  const { bondType } = config;
  const { getPoolBondOptions } = useActivePool() as ActivePoolContextState;

  const stakeBondOptions: BondOptions = getBondOptions(activeAccount);
  const poolBondOptions = getPoolBondOptions(activeAccount);
  const isStaking = bondType === 'stake';
  const isPooling = bondType === 'pool';

  const { freeToBond: freeToBondBn } = isPooling
    ? poolBondOptions
    : stakeBondOptions;
  const freeToBond = planckBnToUnit(freeToBondBn, units);

  // local bond value
  const [bond, setBond] = useState({ bond: freeToBond });

  // bond valid
  const [bondValid, setBondValid]: any = useState(false);

  // update bond value on task change
  useEffect(() => {
    const _bond = freeToBond;
    setBond({ bond: _bond });
  }, [freeToBond]);

  // modal resize on form update
  useEffect(() => {
    setResize();
  }, [bond]);

  // tx to submit
  const tx = () => {
    let _tx = null;
    if (!bondValid || !api || !activeAccount) {
      return _tx;
    }

    // remove decimal errors
    const bondToSubmit = unitToPlanckBn(bond.bond, units);

    // determine _tx
    if (isPooling) {
      _tx = api.tx.nominationPools.bondExtra({ FreeBalance: bondToSubmit });
    } else if (isStaking) {
      _tx = api.tx.staking.bondExtra(bondToSubmit);
    }
    return _tx;
  };

  const { submitTx, estimatedFee, submitting } = useSubmitExtrinsic({
    tx: tx(),
    from: activeAccount,
    shouldSubmit: bondValid,
    callbackSubmit: () => {
      setModalStatus(0);
    },
    callbackInBlock: () => {},
  });

  const TxFee = (
    <p>Estimated Tx Fee: {estimatedFee === null ? '...' : `${estimatedFee}`}</p>
  );

  const warnings = [];
  if (!accountHasSigner(activeAccount)) {
    warnings.push('Your account is read only, and cannot sign transactions.');
  }

  return (
    <>
      <div className="items">
        <>
          <BondInputWithFeedback
            bondType={bondType}
            unbond={false}
            listenIsValid={setBondValid}
            defaultBond={freeToBond}
            setters={[
              {
                set: setBond,
                current: bond,
              },
            ]}
            warnings={warnings}
          />
          <NotesWrapper>{TxFee}</NotesWrapper>
        </>
      </div>
      <FormFooter
        setSection={setSection}
        submitTx={submitTx}
        submitting={submitting}
        isValid={bondValid && accountHasSigner(activeAccount)}
      />
    </>
  );
};
