// src/LiquidityPools.js

import React, { useEffect, useState } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { getOrca, OrcaFarmConfig } from '@orca-so/sdk';

function LiquidityPools() {
    const { connection } = useConnection();
    const { publicKey, signAllTransactions, sendTransaction } = useWallet();
    const [pools, setPools] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!publicKey) {
            setPools([]);
            return;
        }

        const fetchPools = async () => {
            setLoading(true);
            const orca = getOrca(connection);
            const allPools = orca.getAllPools();
            const userPools = [];

            for (const [poolName, pool] of Object.entries(allPools)) {
                const lpBalance = await pool.getLPBalance(publicKey);
                if (lpBalance > 0) {
                    userPools.push({ name: poolName, balance: lpBalance, pool });
                }
            }

            setPools(userPools);
            setLoading(false);
        };

        fetchPools();
    }, [connection, publicKey]);

    const automateFarm = async (pool) => {
        try {
            // Lógica para automatizar a farm
            alert(`Automatização iniciada para ${pool.name}`);
        } catch (error) {
            console.error(error);
            alert('Erro ao automatizar a farm.');
        }
    };

    return (
        <div>
            <h2>Suas Pools de Liquidez</h2>
            {publicKey ? (
                loading ? (
                    <p>Carregando suas pools de liquidez...</p>
                ) : pools.length > 0 ? (
                    <ul>
                        {pools.map((pool) => (
                            <li key={pool.name}>
                                {pool.name}: {pool.balance.toNumber()}
                                <button onClick={() => automateFarm(pool)}>Automatizar Farm</button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Você não possui pools de liquidez.</p>
                )
            ) : (
                <p>Conecte sua carteira para visualizar suas pools de liquidez.</p>
            )}
        </div>
    );
}

export default LiquidityPools;
