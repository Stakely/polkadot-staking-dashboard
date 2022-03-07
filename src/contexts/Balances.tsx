// Copyright 2022 @rossbulat/polkadot-staking-experience authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { useState, useEffect, useRef } from 'react';
import { useApi } from './Api';
import { useConnect } from './Connect';

export const BalancesContext: any = React.createContext({
  getAccountBalance: (a: string) => { },
  getAccountLedger: (a: string) => { },
  getBondedAccount: (a: string) => { },
  accounts: [],
});
export const useBalances = () => React.useContext(BalancesContext);

export const BalancesContextWrapper = (props: any) => {

  const { api, isReady }: any = useApi();
  const { accounts }: any = useConnect();

  const [state, _setState]: any = useState({
    accounts: [],
    unsub: [],
  });

  const stateRef = useRef(state);

  const setState = (val: any) => {
    stateRef.current = val;
    _setState(val);
  }

  const defaultBalance = () => {
    return {
      free: 0,
      reserved: 0,
      miscFrozen: 0,
      feeFrozen: 0,
    };
  }

  const defaultLedger = () => {
    return {
      stash: null,
      active: 0,
      total: 0,
      unlocking: [],
    };
  }

  // unsub and resubscribe to newly active account
  useEffect(() => {
    if (isReady()) {
      // unsubscribe and refetch active account
      unsubscribeAll(true);
    }
    return (() => {
      unsubscribeAll(false);
    });
  }, [accounts, isReady()]);


  // unsubscribe from all activeAccount subscriptions
  const unsubscribeAll = async (refetch: boolean) => {
    // unsubscribe from accounts
    let { unsub } = stateRef.current;
    for (let unsubscribe of unsub) {
      await unsubscribe();
    }
    // refetch balances
    if (refetch) {
      getBalances();
    }
  }

  // get active account balances. Should be called when an account switches
  const getBalances = async () => {

    let _unsubscribe = [];
    for (let account of accounts) {

      let { address } = account;

      // Subscribe to account balances and ledger
      const unsub = await api.queryMulti([
        [api.query.system.account, address],
        [api.query.staking.ledger, address],
        [api.query.staking.bonded, address],
      ], ([{ nonce, data: balance }, ledger, bonded]: any) => {

        // account state update
        let _account: any = {
          address: address,
        };

        // set account balance
        let { free, reserved, miscFrozen, feeFrozen } = balance;
        _account['balance'] = {
          free: parseInt(free.toString()),
          reserved: parseInt(reserved.toString()),
          miscFrozen: parseInt(miscFrozen.toString()),
          feeFrozen: parseInt(feeFrozen.toString()),
        };

        // set account ledger
        let _ledger = ledger.unwrapOr(null);
        if (_ledger === null) {
          _account['ledger'] = defaultLedger();
        } else {

          const { stash, total, active, unlocking } = _ledger;
          _account['ledger'] = {
            stash: stash.toHuman(),
            active: active.toNumber(),
            total: total.toNumber(),
            unlocking: unlocking.toHuman(),
          };
        }

        // set account bonded (controller) or null
        let _bonded = bonded.unwrapOr(null);
        _bonded = _bonded === null
          ? null
          : _bonded.toHuman();

        _account['bonded'] = _bonded;

        // update account in context state
        let _accounts = Object.values(stateRef.current.accounts);
        _accounts = _accounts.filter((acc: any) => acc.address !== address);
        _accounts.push(_account);

        // update state
        setState({ ...stateRef.current, accounts: _accounts });
      });

      // assign new subscription
      _unsubscribe.push(unsub);
      setState({ ...stateRef.current, unsub: _unsubscribe });
    }

    // TO DO: tidy-up accounts that no longer exist 
    // refer to Connect accounts, rm metadata if does not exist on Connect.
  }


  // get an account's balance metadata
  const getAccountBalance = (address: string) => {
    const account = stateRef.current.accounts.filter((acc: any) => acc.address === address);

    if (!account.length) {
      return defaultBalance();
    }
    const { balance } = account[0];

    if (balance.free === undefined) {
      return defaultBalance();
    }
    return balance;
  }

  //get an account's ledger metadata
  const getAccountLedger = (address: string) => {
    const account = stateRef.current.accounts.filter((acc: any) => acc.address === address);
    if (!account.length) {
      return defaultLedger();
    }
    const { ledger } = account[0];
    if (ledger.stash === undefined) {
      return defaultLedger();
    }
    return ledger;
  }

  //get an account's bonded (controller) account)
  const getBondedAccount = (address: string) => {
    const account = stateRef.current.accounts.filter((acc: any) => acc.address === address);
    if (!account.length) {
      return null;
    }
    const { bonded } = account[0];
    return bonded;
  }

  return (
    <BalancesContext.Provider value={{
      getAccountBalance: getAccountBalance,
      getAccountLedger: getAccountLedger,
      getBondedAccount: getBondedAccount,
      accounts: stateRef.current.accounts,
    }}>
      {props.children}
    </BalancesContext.Provider>
  )
}

export default BalancesContextWrapper;