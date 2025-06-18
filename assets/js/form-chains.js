    app.page.initGetProfileEvent = function() {
        document.getElementById('get-profile').addEventListener('click', function() {
            window.venlyConnect.api.getProfile().then(function(e) {
                app.log(e);
            });
        });
    };

    app.page.initEthereum = function() {
        var secretType = 'ETHEREUM';
        var fields = {
            walletId: {type: 'wallet-select', label: 'From'},
            to: {type: 'input', label: 'To', defaultValue: '0x680800Dd4913021821A9C08D569eF4338dB8E9f6'},
            value: {type: 'input', label: 'Amount (in WEI)', defaultValue: '31400000000000000'},
            data: {type: 'textarea', label: 'Data (optional)', placeholder: 'Some test data'},
            name: {type: 'input', label: 'Network name', placeholder: 'e.g. Rinkeby', network: true},
            nodeUrl: {type: 'input', label: 'Network node URL', placeholder: 'e.g. https://rinkeby.infura.io', network: true},
        };
        createSignForm(secretType, 'ETHEREUM_TRANSACTION', fields);

        createSignRawForm(secretType, 'ETHEREUM_RAW', {
            walletId: fields.walletId,
            data: Object.assign({}, fields.data, {defaultValue: 'Some test data'}),
            prefix: {type: 'checkbox', checked: true, label: 'Prefix'},
            hash: {
                type: 'checkbox',
                checked: true,
                label: 'Hash',
                info: 'When prefix is checked, hash will always be set to \'true\''
            }
        });

        createSignMessage(secretType, {
            walletId: fields.walletId,
            data: Object.assign({}, fields.data, {defaultValue: 'Some message', label: 'Message', placeholder: '{}'}),
        });

        createSignEip712(secretType, {
            walletId: fields.walletId,
            data: Object.assign({}, fields.data, {
                defaultValue: '{"types":{"EIP712Domain":[{"name":"name","type":"string"},{"name":"version","type":"string"},{"name":"chainId","type":"uint256"},{"name":"verifyingContract","type":"address"},{"name":"salt","type":"bytes32"}],"Bid":[{"name":"amount","type":"uint256"},{"name":"bidder","type":"Identity"}],"Identity":[{"name":"userId","type":"uint256"},{"name":"wallet","type":"address"}]},"domain":{"name":"My amazing dApp","version":"2","chainId":1,"verifyingContract":"0x1C56346CD2A2Bf3202F771f50d3D14a367B48070","salt":"0xf2d857f4a3edcb9b78b4d503bfe733db1e3f6cdc2b7971ee739626c97e86a558"},"primaryType":"Bid","message":{"amount":100,"bidder":{"userId":323,"wallet":"0x3333333333333333333333333333333333333333"}}}',
                label: 'Data',
                json: true
            }),
        });

        createExecuteContractForm(secretType, {
            walletId: {type: 'wallet-select', label: 'From'},
            to: {type: 'input', label: 'Contract Address', defaultValue: '0xc4375b7de8af5a38a93548eb8453a498222c4ff2'},
            value: {type: 'input', label: 'Amount (in WEI)', defaultValue: '0'},
            functionName: {type: 'input', label: 'Function Name', defaultValue: 'approve'},
            inputs: {
                type: 'textarea',
                label: 'Inputs',
                defaultValue: '[{"type": "address", "value": "0xd82049204D8514c637f150C7231BFefC5C4937Ec"},{"type": "uint256", "value": "0"}]'
            },
            chainSpecificFields: {type: 'textarea', label: 'Chain specific fields', defaultValue: '{"gasLimit": 200000, "gasPrice": 10000000000}', dataName: 'chainSpecific'},
            name: {type: 'input', label: 'Network name', placeholder: 'e.g. Rinkeby', network: true},
            nodeUrl: {type: 'input', label: 'Network node URL', placeholder: 'e.g. https://rinkeby.infura.io', network: true}
        });

        createReadContractForm(secretType, {
            walletId: {type: 'wallet-select', label: 'From'},
            contractAddress: {type: 'input', label: 'Contract Address', defaultValue: '0xd82049204D8514c637f150C7231BFefC5C4937Ec'},
            functionName: {type: 'input', label: 'Function Name', defaultValue: 'isApprovedForAll'},
            inputs: {
                type: 'textarea',
                label: 'Inputs',
                defaultValue: '[{"type": "address", "value": "0xd82049204D8514c637f150C7231BFefC5C4937Ec"},{"type": "address", "value": "0x1ac1ca3665b5cd5fdd8bc76f924b76c2a2889d39"}]'
            },
            outputs: {
                type: 'textarea',
                label: 'Outputs',
                defaultValue: '[{"type": "bool"}]'
            }
        });

        createExecuteForm(secretType, {
            walletId: fields.walletId,
            to: fields.to,
            value: {type: 'input', label: 'Amount (in ETH)', defaultValue: '0.0314'},
            tokenAddress: {type: 'input', label: 'Token address', placeholder: 'e.g. 0x6ff6c0ff1d68b964901f986d4c9fa3ac68346570'},
            data: fields.data,
            name: fields.name,
            nodeUrl: fields.nodeUrl,
        });

        createImportWalletForm(secretType, {
            walletId: fields.walletId,
            to: {type: 'select', label: 'To chain', defaultValue: 'MATIC', values: ['MATIC', 'BSC']},
        })
    };

    app.page.initMatic = function() {
        var secretType = 'MATIC';
        var fields = {
            walletId: {type: 'wallet-select', label: 'From'},
            to: {type: 'input', label: 'To', defaultValue: '0x680800Dd4913021821A9C08D569eF4338dB8E9f6'},
            value: {type: 'input', label: 'Amount (in WEI)', defaultValue: '31400000000000000'},
            data: {type: 'textarea', label: 'Data (optional)', placeholder: 'Some test data'},
            name: {type: 'input', label: 'Network name', placeholder: 'e.g. Rinkeby', network: true},
            nodeUrl: {type: 'input', label: 'Network node URL', placeholder: 'e.g. https://rinkeby.infura.io', network: true},
        };
        createSignForm(secretType, 'MATIC_TRANSACTION', fields);

        createSignRawForm(secretType, 'MATIC_RAW', {
            walletId: fields.walletId,
            data: Object.assign({}, fields.data, {defaultValue: 'Some test data'}),
            prefix: {type: 'checkbox', checked: true, label: 'Prefix'},
            hash: {type: 'checkbox', checked: true, label: 'Hash', info: 'When prefix is checked, hash will always be set to \'true\''}
        });

        createSignMessage(secretType, {
            walletId: fields.walletId,
            data: Object.assign({}, fields.data, {defaultValue: 'Some message', label: 'Message'}),
        });

        createSignEip712(secretType, {
            walletId: fields.walletId,
            data: Object.assign({}, fields.data, {
                defaultValue: '{"types":{"EIP712Domain":[{"name":"name","type":"string"},{"name":"version","type":"string"},{"name":"chainId","type":"uint256"},{"name":"verifyingContract","type":"address"},{"name":"salt","type":"bytes32"}],"Bid":[{"name":"amount","type":"uint256"},{"name":"bidder","type":"Identity"}],"Identity":[{"name":"userId","type":"uint256"},{"name":"wallet","type":"address"}]},"domain":{"name":"My amazing dApp","version":"2","chainId":137,"verifyingContract":"0x1C56346CD2A2Bf3202F771f50d3D14a367B48070","salt":"0xf2d857f4a3edcb9b78b4d503bfe733db1e3f6cdc2b7971ee739626c97e86a558"},"primaryType":"Bid","message":{"amount":100,"bidder":{"userId":323,"wallet":"0x3333333333333333333333333333333333333333"}}}',
                label: 'Data',
                json: true
            }),
        });

        createExecuteContractForm(secretType, {
            walletId: {type: 'wallet-select', label: 'From'},
            to: {type: 'input', label: 'Contract Address', defaultValue: '0xc4375b7de8af5a38a93548eb8453a498222c4ff2'},
            value: {type: 'input', label: 'Amount (in WEI)', defaultValue: '0'},
            functionName: {type: 'input', label: 'Function Name', defaultValue: 'approve'},
            inputs: {
                type: 'textarea',
                label: 'Inputs',
                defaultValue: '[{"type": "address", "value": "0xd82049204D8514c637f150C7231BFefC5C4937Ec"},{"type": "uint256", "value": "0"}]'
            },
            chainSpecificFields: {type: 'textarea', label: 'Chain specific fields', defaultValue: '{"gasLimit": 200000, "gasPrice": 0}', dataName: 'chainSpecific'},
            name: {type: 'input', label: 'Network name', placeholder: 'e.g. Rinkeby', network: true},
            nodeUrl: {type: 'input', label: 'Network node URL', placeholder: 'e.g. https://rinkeby.infura.io', network: true}
        });

        createReadContractForm(secretType, {
            walletId: {type: 'wallet-select', label: 'From'},
            contractAddress: {type: 'input', label: 'Contract Address', defaultValue: '0x78cB9c3977382d699EF458C071A3353A4553EF49'},
            functionName: {type: 'input', label: 'Function Name', defaultValue: 'isApprovedForAll'},
            inputs: {
                type: 'textarea',
                label: 'Inputs',
                defaultValue: '[{"type": "address", "value": "0xA00Fe54522ab6100cdE81635A1DB78d7067D75FA"},{"type": "address", "value": "0x1ac1ca3665b5cd5fdd8bc76f924b76c2a2889d39"}]'
            },
            outputs: {
                type: 'textarea',
                label: 'Outputs',
                defaultValue: '[{"type": "bool"}]'
            }
        });

        fields.tokenAddress = {
            type: "input",
            label: "Token Address (optional)",
        };
        createExecuteForm(secretType, {
            walletId: fields.walletId,
            to: fields.to,
            value: {type: 'input', label: 'Amount (in POL)', defaultValue: '0.0314'},
            tokenAddress: {
                type: 'input',
                label: 'Token address',
                placeholder: 'e.g. 0x6ff6c0ff1d68b964901f986d4c9fa3ac68346570'
            },
            data: fields.data,
            name: fields.name,
            nodeUrl: fields.nodeUrl,
        });

        createImportWalletForm(secretType, {
            walletId: fields.walletId,
            to: {type: 'select', label: 'To chain', defaultValue: 'ETHEREUM', values: ['ETHEREUM']},
        })
    };

    app.page.initArbitrum = function() {
        var secretType = 'ARBITRUM';
        var fields = {
            walletId: {type: 'wallet-select', label: 'From'},
            to: {type: 'input', label: 'To', defaultValue: '0x680800Dd4913021821A9C08D569eF4338dB8E9f6'},
            value: {type: 'input', label: 'Amount (in WEI)', defaultValue: '31400000000000000'},
            data: {type: 'textarea', label: 'Data (optional)', placeholder: 'Some test data'},
            name: {type: 'input', label: 'Network name', placeholder: 'e.g. TestNet', network: true},
            nodeUrl: {type: 'input', label: 'Network node URL', placeholder: 'e.g. https://arbitrum-node-qa.venly.io', network: true},
        };
        createSignForm(secretType, 'ARBITRUM_TRANSACTION', fields);

        createSignRawForm(secretType, 'ARBITRUM_RAW', {
            walletId: fields.walletId,
            data: Object.assign({}, fields.data, {defaultValue: 'Some test data'}),
            prefix: {type: 'checkbox', checked: true, label: 'Prefix'},
            hash: {type: 'checkbox', checked: true, label: 'Hash', info: 'When prefix is checked, hash will always be set to \'true\''}
        });

        createSignMessage(secretType, {
            walletId: fields.walletId,
            data: Object.assign({}, fields.data, {defaultValue: 'Some message', label: 'Message'}),
        });

        createSignEip712(secretType, {
            walletId: fields.walletId,
            data: Object.assign({}, fields.data, {
                defaultValue: '{"types":{"EIP712Domain":[{"name":"name","type":"string"},{"name":"version","type":"string"},{"name":"chainId","type":"uint256"},{"name":"verifyingContract","type":"address"},{"name":"salt","type":"bytes32"}],"Bid":[{"name":"amount","type":"uint256"},{"name":"bidder","type":"Identity"}],"Identity":[{"name":"userId","type":"uint256"},{"name":"wallet","type":"address"}]},"domain":{"name":"My amazing dApp","version":"2","chainId":137,"verifyingContract":"0x1C56346CD2A2Bf3202F771f50d3D14a367B48070","salt":"0xf2d857f4a3edcb9b78b4d503bfe733db1e3f6cdc2b7971ee739626c97e86a558"},"primaryType":"Bid","message":{"amount":100,"bidder":{"userId":323,"wallet":"0x3333333333333333333333333333333333333333"}}}',
                label: 'Data',
                json: true
            }),
        });

        createExecuteContractForm(secretType, {
            walletId: {type: 'wallet-select', label: 'From'},
            to: {type: 'input', label: 'Contract Address', defaultValue: '0xc4375b7de8af5a38a93548eb8453a498222c4ff2'},
            value: {type: 'input', label: 'Amount (in WEI)', defaultValue: '0'},
            functionName: {type: 'input', label: 'Function Name', defaultValue: 'approve'},
            inputs: {
                type: 'textarea',
                label: 'Inputs',
                defaultValue: '[{"type": "address", "value": "0xd82049204D8514c637f150C7231BFefC5C4937Ec"},{"type": "uint256", "value": "0"}]'
            },
            chainSpecificFields: {type: 'textarea', label: 'Chain specific fields', defaultValue: '{"gasLimit": 200000, "gasPrice": 0}', dataName: 'chainSpecific'},
            name: {type: 'input', label: 'Network name', placeholder: 'e.g. TestNet', network: true},
            nodeUrl: {type: 'input', label: 'Network node URL', placeholder: 'e.g. https://arbitrum-node-qa.venly.io', network: true}
        });

        createReadContractForm(secretType, {
            walletId: {type: 'wallet-select', label: 'From'},
            contractAddress: {type: 'input', label: 'Contract Address', defaultValue: '0x78cB9c3977382d699EF458C071A3353A4553EF49'},
            functionName: {type: 'input', label: 'Function Name', defaultValue: 'isApprovedForAll'},
            inputs: {
                type: 'textarea',
                label: 'Inputs',
                defaultValue: '[{"type": "address", "value": "0xA00Fe54522ab6100cdE81635A1DB78d7067D75FA"},{"type": "address", "value": "0x1ac1ca3665b5cd5fdd8bc76f924b76c2a2889d39"}]'
            },
            outputs: {
                type: 'textarea',
                label: 'Outputs',
                defaultValue: '[{"type": "bool"}]'
            }
        });

        fields.tokenAddress = {
            type: "input",
            label: "Token Address (optional)",
        };
        createExecuteForm(secretType, {
            walletId: fields.walletId,
            to: fields.to,
            value: {type: 'input', label: 'Amount (in ETH)', defaultValue: '0.0314'},
            tokenAddress: {
                type: 'input',
                label: 'Token address',
                placeholder: 'e.g. 0x6ff6c0ff1d68b964901f986d4c9fa3ac68346570'
            },
            data: fields.data,
            name: fields.name,
            nodeUrl: fields.nodeUrl,
        });

        createImportWalletForm(secretType, {
            walletId: fields.walletId,
            to: {type: 'select', label: 'To chain', defaultValue: 'ETHEREUM', values: ['ETHEREUM']},
        })
    };

    app.page.initXPLA = function() {
        var secretType = 'XPLA';
        var fields = {
            walletId: {type: 'wallet-select', label: 'From'},
            to: {type: 'input', label: 'To', defaultValue: '0x680800Dd4913021821A9C08D569eF4338dB8E9f6'},
            value: {type: 'input', label: 'Amount (in WEI)', defaultValue: '31400000000000000'},
            data: {type: 'textarea', label: 'Data (optional)', placeholder: 'Some test data'},
            name: {type: 'input', label: 'Network name', placeholder: 'e.g. TestNet', network: true},
            nodeUrl: {type: 'input', label: 'Network node URL', placeholder: '', network: true},
        };
        createSignForm(secretType, 'XPLA_TRANSACTION', fields);

        createSignRawForm(secretType, 'XPLA_RAW', {
            walletId: fields.walletId,
            data: Object.assign({}, fields.data, {defaultValue: 'Some test data'}),
            prefix: {type: 'checkbox', checked: true, label: 'Prefix'},
            hash: {type: 'checkbox', checked: true, label: 'Hash', info: 'When prefix is checked, hash will always be set to \'true\''}
        });

        createSignMessage(secretType, {
            walletId: fields.walletId,
            data: Object.assign({}, fields.data, {defaultValue: 'Some message', label: 'Message'}),
        });

        createSignEip712(secretType, {
            walletId: fields.walletId,
            data: Object.assign({}, fields.data, {
                defaultValue: '{"types":{"EIP712Domain":[{"name":"name","type":"string"},{"name":"version","type":"string"},{"name":"chainId","type":"uint256"},{"name":"verifyingContract","type":"address"},{"name":"salt","type":"bytes32"}],"Bid":[{"name":"amount","type":"uint256"},{"name":"bidder","type":"Identity"}],"Identity":[{"name":"userId","type":"uint256"},{"name":"wallet","type":"address"}]},"domain":{"name":"My amazing dApp","version":"2","chainId":137,"verifyingContract":"0x1C56346CD2A2Bf3202F771f50d3D14a367B48070","salt":"0xf2d857f4a3edcb9b78b4d503bfe733db1e3f6cdc2b7971ee739626c97e86a558"},"primaryType":"Bid","message":{"amount":100,"bidder":{"userId":323,"wallet":"0x3333333333333333333333333333333333333333"}}}',
                label: 'Data',
                json: true
            }),
        });

        createExecuteContractForm(secretType, {
            walletId: {type: 'wallet-select', label: 'From'},
            to: {type: 'input', label: 'Contract Address', defaultValue: '0xc4375b7de8af5a38a93548eb8453a498222c4ff2'},
            value: {type: 'input', label: 'Amount (in WEI)', defaultValue: '0'},
            functionName: {type: 'input', label: 'Function Name', defaultValue: 'approve'},
            inputs: {
                type: 'textarea',
                label: 'Inputs',
                defaultValue: '[{"type": "address", "value": "0xd82049204D8514c637f150C7231BFefC5C4937Ec"},{"type": "uint256", "value": "0"}]'
            },
            chainSpecificFields: {type: 'textarea', label: 'Chain specific fields', defaultValue: '{"gasLimit": 200000, "gasPrice": 0}', dataName: 'chainSpecific'},
            name: {type: 'input', label: 'Network name', placeholder: 'e.g. TestNet', network: true},
            nodeUrl: {type: 'input', label: 'Network node URL', placeholder: '', network: true}
        });

        createReadContractForm(secretType, {
            walletId: {type: 'wallet-select', label: 'From'},
            contractAddress: {type: 'input', label: 'Contract Address', defaultValue: '0x78cB9c3977382d699EF458C071A3353A4553EF49'},
            functionName: {type: 'input', label: 'Function Name', defaultValue: 'isApprovedForAll'},
            inputs: {
                type: 'textarea',
                label: 'Inputs',
                defaultValue: '[{"type": "address", "value": "0xA00Fe54522ab6100cdE81635A1DB78d7067D75FA"},{"type": "address", "value": "0x1ac1ca3665b5cd5fdd8bc76f924b76c2a2889d39"}]'
            },
            outputs: {
                type: 'textarea',
                label: 'Outputs',
                defaultValue: '[{"type": "bool"}]'
            }
        });

        fields.tokenAddress = {
            type: "input",
            label: "Token Address (optional)",
        };
        createExecuteForm(secretType, {
            walletId: fields.walletId,
            to: fields.to,
            value: {type: 'input', label: 'Amount (in ETH)', defaultValue: '0.0314'},
            tokenAddress: {
                type: 'input',
                label: 'Token address',
                placeholder: 'e.g. 0x6ff6c0ff1d68b964901f986d4c9fa3ac68346570'
            },
            data: fields.data,
            name: fields.name,
            nodeUrl: fields.nodeUrl,
        });

        createImportWalletForm(secretType, {
            walletId: fields.walletId,
            to: {type: 'select', label: 'To chain', defaultValue: 'ETHEREUM', values: ['ETHEREUM']},
        })
    };

	app.page.initBase = function() {
        var secretType = 'BASE';
        var fields = {
            walletId: {type: 'wallet-select', label: 'From'},
            to: {type: 'input', label: 'To', defaultValue: '0x680800Dd4913021821A9C08D569eF4338dB8E9f6'},
            value: {type: 'input', label: 'Amount (in WEI)', defaultValue: '31400000000000000'},
            data: {type: 'textarea', label: 'Data (optional)', placeholder: 'Some test data'},
            name: {type: 'input', label: 'Network name', placeholder: 'e.g. TestNet', network: true},
            nodeUrl: {type: 'input', label: 'Network node URL', placeholder: '', network: true},
        };
        createSignForm(secretType, 'BASE_TRANSACTION', fields);

        createSignRawForm(secretType, 'BASE_RAW', {
            walletId: fields.walletId,
            data: Object.assign({}, fields.data, {defaultValue: 'Some test data'}),
            prefix: {type: 'checkbox', checked: true, label: 'Prefix'},
            hash: {type: 'checkbox', checked: true, label: 'Hash', info: 'When prefix is checked, hash will always be set to \'true\''}
        });

        createSignMessage(secretType, {
            walletId: fields.walletId,
            data: Object.assign({}, fields.data, {defaultValue: 'Some message', label: 'Message'}),
        });

        createSignEip712(secretType, {
            walletId: fields.walletId,
            data: Object.assign({}, fields.data, {
                defaultValue: '{"types":{"EIP712Domain":[{"name":"name","type":"string"},{"name":"version","type":"string"},{"name":"chainId","type":"uint256"},{"name":"verifyingContract","type":"address"},{"name":"salt","type":"bytes32"}],"Bid":[{"name":"amount","type":"uint256"},{"name":"bidder","type":"Identity"}],"Identity":[{"name":"userId","type":"uint256"},{"name":"wallet","type":"address"}]},"domain":{"name":"My amazing dApp","version":"2","chainId":137,"verifyingContract":"0x1C56346CD2A2Bf3202F771f50d3D14a367B48070","salt":"0xf2d857f4a3edcb9b78b4d503bfe733db1e3f6cdc2b7971ee739626c97e86a558"},"primaryType":"Bid","message":{"amount":100,"bidder":{"userId":323,"wallet":"0x3333333333333333333333333333333333333333"}}}',
                label: 'Data',
                json: true
            }),
        });

        createExecuteContractForm(secretType, {
            walletId: {type: 'wallet-select', label: 'From'},
            to: {type: 'input', label: 'Contract Address', defaultValue: '0xc4375b7de8af5a38a93548eb8453a498222c4ff2'},
            value: {type: 'input', label: 'Amount (in WEI)', defaultValue: '0'},
            functionName: {type: 'input', label: 'Function Name', defaultValue: 'approve'},
            inputs: {
                type: 'textarea',
                label: 'Inputs',
                defaultValue: '[{"type": "address", "value": "0xd82049204D8514c637f150C7231BFefC5C4937Ec"},{"type": "uint256", "value": "0"}]'
            },
            chainSpecificFields: {type: 'textarea', label: 'Chain specific fields', defaultValue: '{"gasLimit": 200000, "gasPrice": 0}', dataName: 'chainSpecific'},
            name: {type: 'input', label: 'Network name', placeholder: 'e.g. TestNet', network: true},
            nodeUrl: {type: 'input', label: 'Network node URL', placeholder: '', network: true}
        });

        createReadContractForm(secretType, {
            walletId: {type: 'wallet-select', label: 'From'},
            contractAddress: {type: 'input', label: 'Contract Address', defaultValue: '0x78cB9c3977382d699EF458C071A3353A4553EF49'},
            functionName: {type: 'input', label: 'Function Name', defaultValue: 'isApprovedForAll'},
            inputs: {
                type: 'textarea',
                label: 'Inputs',
                defaultValue: '[{"type": "address", "value": "0xA00Fe54522ab6100cdE81635A1DB78d7067D75FA"},{"type": "address", "value": "0x1ac1ca3665b5cd5fdd8bc76f924b76c2a2889d39"}]'
            },
            outputs: {
                type: 'textarea',
                label: 'Outputs',
                defaultValue: '[{"type": "bool"}]'
            }
        });

        fields.tokenAddress = {
            type: "input",
            label: "Token Address (optional)",
        };
        createExecuteForm(secretType, {
            walletId: fields.walletId,
            to: fields.to,
            value: {type: 'input', label: 'Amount (in ETH)', defaultValue: '0.0314'},
            tokenAddress: {
                type: 'input',
                label: 'Token address',
                placeholder: 'e.g. 0x6ff6c0ff1d68b964901f986d4c9fa3ac68346570'
            },
            data: fields.data,
            name: fields.name,
            nodeUrl: fields.nodeUrl,
        });

        createImportWalletForm(secretType, {
            walletId: fields.walletId,
            to: {type: 'select', label: 'To chain', defaultValue: 'ETHEREUM', values: ['ETHEREUM']},
        })
    };

    app.page.initOptimism = function() {
        var secretType = 'OPTIMISM';
        var fields = {
            walletId: {type: 'wallet-select', label: 'From'},
            to: {type: 'input', label: 'To', defaultValue: '0x680800Dd4913021821A9C08D569eF4338dB8E9f6'},
            value: {type: 'input', label: 'Amount (in WEI)', defaultValue: '31400000000000000'},
            data: {type: 'textarea', label: 'Data (optional)', placeholder: 'Some test data'},
            name: {type: 'input', label: 'Network name', placeholder: 'e.g. TestNet', network: true},
            nodeUrl: {type: 'input', label: 'Network node URL', placeholder: '', network: true},
        };
        createSignForm(secretType, 'OPTIMISM_TRANSACTION', fields);

        createSignRawForm(secretType, 'OPTIMISM_RAW', {
            walletId: fields.walletId,
            data: Object.assign({}, fields.data, {defaultValue: 'Some test data'}),
            prefix: {type: 'checkbox', checked: true, label: 'Prefix'},
            hash: {type: 'checkbox', checked: true, label: 'Hash', info: 'When prefix is checked, hash will always be set to \'true\''}
        });

        createSignMessage(secretType, {
            walletId: fields.walletId,
            data: Object.assign({}, fields.data, {defaultValue: 'Some message', label: 'Message'}),
        });

        createSignEip712(secretType, {
            walletId: fields.walletId,
            data: Object.assign({}, fields.data, {
                defaultValue: '{"types":{"EIP712Domain":[{"name":"name","type":"string"},{"name":"version","type":"string"},{"name":"chainId","type":"uint256"},{"name":"verifyingContract","type":"address"},{"name":"salt","type":"bytes32"}],"Bid":[{"name":"amount","type":"uint256"},{"name":"bidder","type":"Identity"}],"Identity":[{"name":"userId","type":"uint256"},{"name":"wallet","type":"address"}]},"domain":{"name":"My amazing dApp","version":"2","chainId":137,"verifyingContract":"0x1C56346CD2A2Bf3202F771f50d3D14a367B48070","salt":"0xf2d857f4a3edcb9b78b4d503bfe733db1e3f6cdc2b7971ee739626c97e86a558"},"primaryType":"Bid","message":{"amount":100,"bidder":{"userId":323,"wallet":"0x3333333333333333333333333333333333333333"}}}',
                label: 'Data',
                json: true
            }),
        });

        createExecuteContractForm(secretType, {
            walletId: {type: 'wallet-select', label: 'From'},
            to: {type: 'input', label: 'Contract Address', defaultValue: '0xc4375b7de8af5a38a93548eb8453a498222c4ff2'},
            value: {type: 'input', label: 'Amount (in WEI)', defaultValue: '0'},
            functionName: {type: 'input', label: 'Function Name', defaultValue: 'approve'},
            inputs: {
                type: 'textarea',
                label: 'Inputs',
                defaultValue: '[{"type": "address", "value": "0xd82049204D8514c637f150C7231BFefC5C4937Ec"},{"type": "uint256", "value": "0"}]'
            },
            chainSpecificFields: {type: 'textarea', label: 'Chain specific fields', defaultValue: '{"gasLimit": 200000, "gasPrice": 0}', dataName: 'chainSpecific'},
            name: {type: 'input', label: 'Network name', placeholder: 'e.g. TestNet', network: true},
            nodeUrl: {type: 'input', label: 'Network node URL', placeholder: '', network: true}
        });

        createReadContractForm(secretType, {
            walletId: {type: 'wallet-select', label: 'From'},
            contractAddress: {type: 'input', label: 'Contract Address', defaultValue: '0x78cB9c3977382d699EF458C071A3353A4553EF49'},
            functionName: {type: 'input', label: 'Function Name', defaultValue: 'isApprovedForAll'},
            inputs: {
                type: 'textarea',
                label: 'Inputs',
                defaultValue: '[{"type": "address", "value": "0xA00Fe54522ab6100cdE81635A1DB78d7067D75FA"},{"type": "address", "value": "0x1ac1ca3665b5cd5fdd8bc76f924b76c2a2889d39"}]'
            },
            outputs: {
                type: 'textarea',
                label: 'Outputs',
                defaultValue: '[{"type": "bool"}]'
            }
        });

        fields.tokenAddress = {
            type: "input",
            label: "Token Address (optional)",
        };
        createExecuteForm(secretType, {
            walletId: fields.walletId,
            to: fields.to,
            value: {type: 'input', label: 'Amount (in ETH)', defaultValue: '0.0314'},
            tokenAddress: {
                type: 'input',
                label: 'Token address',
                placeholder: 'e.g. 0x6ff6c0ff1d68b964901f986d4c9fa3ac68346570'
            },
            data: fields.data,
            name: fields.name,
            nodeUrl: fields.nodeUrl,
        });

        createImportWalletForm(secretType, {
            walletId: fields.walletId,
            to: {type: 'select', label: 'To chain', defaultValue: 'ETHEREUM', values: ['ETHEREUM']},
        })
    };

    app.page.initSolana = function() {
        var secretType = 'SOLANA';
        var fields = {
            walletId: {type: 'wallet-select', label: 'From'},
            to: {type: 'input', label: 'To', defaultValue: '0x680800Dd4913021821A9C08D569eF4338dB8E9f6'},
            value: {type: 'input', label: 'Amount (in SOL)', defaultValue: '31400000000000000'},
            data: {type: 'textarea', label: 'Data (optional)', placeholder: 'Some test data'},
            name: {type: 'input', label: 'Network name', placeholder: 'e.g. TestNet', network: true},
            nodeUrl: {type: 'input', label: 'Network node URL', placeholder: '', network: true},
        };
        createSignForm(secretType, 'SOLANA_TRANSACTION', fields);

        createSignRawForm(secretType, 'SOLANA_RAW', {
            walletId: fields.walletId,
            data: Object.assign({}, fields.data, {defaultValue: 'Some test data'}),
            prefix: {type: 'checkbox', checked: true, label: 'Prefix'},
            hash: {type: 'checkbox', checked: true, label: 'Hash', info: 'When prefix is checked, hash will always be set to \'true\''}
        });

        createSignMessage(secretType, {
            walletId: fields.walletId,
            data: Object.assign({}, fields.data, {defaultValue: 'Some message', label: 'Message'}),
        });

        createExecuteContractForm(secretType, {
            walletId: {type: 'wallet-select', label: 'From'},
            to: {type: 'input', label: 'Contract Address', defaultValue: '6bxKGAQQ66PD3bAQuFR7yP5SWox5JYKDACeyH4nvARr5'},
            inputs: {
                type: 'textarea',
                label: 'Inputs',
                defaultValue: `[
                    {
                        "type": "u8",
                        "value": 2
                    },
                    {
                        "type": "str",
                        "value": "Alex"
                    },
                    {
                        "type": "str",
                        "value": "SDEV"
                    },
                    {
                        "type": "struct",
                        "value": [
                            {
                                "type": "u8",
                                "value": 1
                            },
                            {
                                "type": "str",
                                "value": "Tirana"
                            }
                        ]
                    }
                ]`
            },
            chainSpecificFields: {
                type: 'textarea', 
                label: 'Chain specific fields', 
                defaultValue: `{
                    "accounts": [
                        {
                            "type": "PDA",
                            "isWritable": true,
                            "seeds": [
                                {
                                    "type": "string",
                                    "value": "2"
                                }
                            ]
                        }
                    ]
                }`, 
                dataName: 'chainSpecific'
            }
        }, 'Execute Program Execution');

        createReadContractForm(secretType, {
            from: {type: 'input', label: 'From', defaultValue: 'EiEUDdGu9PmRw2RAGrVf7LT6f1MDbhHxkkoFd236RLUc'},
            outputs: {
                type: 'textarea',
                label: 'Outputs',
                defaultValue: `[
                    {"type": "u8"},
                    {"type": "str"},
                    {"type": "str"}
                ]`
            }
        }, 'Read Program');

        fields.tokenAddress = {
            type: "input",
            label: "Token Address (optional)",
        };
        createExecuteForm(secretType, {
            walletId: fields.walletId,
            to: fields.to,
            value: {type: 'input', label: 'Amount (in SOL)', defaultValue: '0.0314'},
            tokenAddress: {
                type: 'input',
                label: 'Token address',
                placeholder: 'e.g. 0x6ff6c0ff1d68b964901f986d4c9fa3ac68346570'
            },
            data: fields.data,
            name: fields.name,
            nodeUrl: fields.nodeUrl,
        });
    };

    app.page.initBsc = function() {
        var secretType = 'BSC';
        var fields = {
            walletId: {type: 'wallet-select', label: 'From'},
            to: {type: 'input', label: 'To', defaultValue: '0x680800Dd4913021821A9C08D569eF4338dB8E9f6'},
            value: {type: 'input', label: 'Amount (in WEI)', defaultValue: '31400000000000000'},
            data: {type: 'textarea', label: 'Data (optional)', placeholder: 'Some test data'},
            name: {type: 'input', label: 'Network name', placeholder: 'e.g. Rinkeby', network: true},
            nodeUrl: {
                type: 'input',
                label: 'Network node URL',
                placeholder: 'e.g. https://rinkeby.infura.io',
                network: true
            },
        };
        createSignForm(secretType, 'BSC_TRANSACTION', fields);

        createSignRawForm(secretType, 'BSC_RAW', {
            walletId: fields.walletId,
            data: Object.assign({}, fields.data, {defaultValue: 'Some test data'}),
            prefix: {type: 'checkbox', checked: true, label: 'Prefix'},
            hash: {
                type: 'checkbox',
                checked: true,
                label: 'Hash',
                info: 'When prefix is checked, hash will always be set to \'true\''
            }
        });

        createSignMessage(secretType, {
            walletId: fields.walletId,
            data: Object.assign({}, fields.data, {defaultValue: 'Some message', label: 'Message'}),
        });

        createSignEip712(secretType, {
            walletId: fields.walletId,
            data: Object.assign({}, fields.data, {
                defaultValue: '{"types":{"EIP712Domain":[{"name":"name","type":"string"},{"name":"version","type":"string"},{"name":"chainId","type":"uint256"},{"name":"verifyingContract","type":"address"},{"name":"salt","type":"bytes32"}],"Bid":[{"name":"amount","type":"uint256"},{"name":"bidder","type":"Identity"}],"Identity":[{"name":"userId","type":"uint256"},{"name":"wallet","type":"address"}]},"domain":{"name":"My amazing dApp","version":"2","chainId":1,"verifyingContract":"0x1C56346CD2A2Bf3202F771f50d3D14a367B48070","salt":"0xf2d857f4a3edcb9b78b4d503bfe733db1e3f6cdc2b7971ee739626c97e86a558"},"primaryType":"Bid","message":{"amount":100,"bidder":{"userId":323,"wallet":"0x3333333333333333333333333333333333333333"}}}',
                label: 'Data',
                json: true
            }),
        })

        createExecuteContractForm(secretType, {
            walletId: {type: 'wallet-select', label: 'From'},
            to: {type: 'input', label: 'Contract Address', defaultValue: '0xc4375b7de8af5a38a93548eb8453a498222c4ff2'},
            value: {type: 'input', label: 'Amount (in WEI)', defaultValue: '0'},
            functionName: {type: 'input', label: 'Function Name', defaultValue: 'approve'},
            inputs: {
                type: 'textarea',
                label: 'Inputs',
                defaultValue: '[{"type": "address", "value": "0xa7ce868f6490186ac57fa12174df770672ec0950"},{"type": "uint256", "value": "0"}]'
            },
            chainSpecificFields: {
                type: 'textarea',
                label: 'Chain specific fields',
                defaultValue: '{"gasLimit": 145000, "gasPrice": 20000000000}',
                dataName: 'chainSpecific'
            },
            name: {type: 'input', label: 'Network name', placeholder: 'e.g. TestNet', network: true},
            nodeUrl: {
                type: 'input',
                label: 'Network node URL',
                placeholder: 'e.g. https://testnet-bsc.arkane.network',
                network: true
            }
        });

        fields.tokenAddress = {
            type: "input",
            label: "Token Address (optional)",
        };
        createExecuteForm(secretType, {
            walletId: fields.walletId,
            to: fields.to,
            value: {type: 'input', label: 'Amount (in BSC)', defaultValue: '0.0314'},
            tokenAddress: {
                type: 'input',
                label: 'Token address',
                placeholder: 'e.g. 0x6ff6c0ff1d68b964901f986d4c9fa3ac68346570'
            },
            data: fields.data,
            name: fields.name,
            nodeUrl: fields.nodeUrl,
        });

        createImportWalletForm(secretType, {
            walletId: fields.walletId,
            to: {type: 'select', label: 'To chain', defaultValue: 'ETHEREUM', values: ['ETHEREUM']},
        })
    };

    app.page.initAvac = function() {
        var secretType = 'AVAC';
        var fields = {
            walletId: {type: 'wallet-select', label: 'From'},
            to: {type: 'input', label: 'To', defaultValue: '0x680800Dd4913021821A9C08D569eF4338dB8E9f6'},
            value: {type: 'input', label: 'Amount (in WEI)', defaultValue: '31400000000000000'},
            data: {type: 'textarea', label: 'Data (optional)', placeholder: 'Some test data'},
            name: {type: 'input', label: 'Network name', placeholder: 'e.g. Rinkeby', network: true},
            nodeUrl: {
                type: 'input',
                label: 'Network node URL',
                placeholder: 'e.g. https://rinkeby.infura.io',
                network: true
            },
        };
        createSignForm(secretType, 'AVAC_TRANSACTION', fields);

        createSignRawForm(secretType, 'AVAC_RAW', {
            walletId: fields.walletId,
            data: Object.assign({}, fields.data, {defaultValue: 'Some test data'}),
            prefix: {type: 'checkbox', checked: true, label: 'Prefix'},
            hash: {
                type: 'checkbox',
                checked: true,
                label: 'Hash',
                info: 'When prefix is checked, hash will always be set to \'true\''
            }
        });

        createSignMessage(secretType, {
            walletId: fields.walletId,
            data: Object.assign({}, fields.data, {defaultValue: 'Some message', label: 'Message'}),
        });

        createSignEip712(secretType, {
            walletId: fields.walletId,
            data: Object.assign({}, fields.data, {
                defaultValue: '{"types":{"EIP712Domain":[{"name":"name","type":"string"},{"name":"version","type":"string"},{"name":"chainId","type":"uint256"},{"name":"verifyingContract","type":"address"},{"name":"salt","type":"bytes32"}],"Bid":[{"name":"amount","type":"uint256"},{"name":"bidder","type":"Identity"}],"Identity":[{"name":"userId","type":"uint256"},{"name":"wallet","type":"address"}]},"domain":{"name":"My amazing dApp","version":"2","chainId":1,"verifyingContract":"0x1C56346CD2A2Bf3202F771f50d3D14a367B48070","salt":"0xf2d857f4a3edcb9b78b4d503bfe733db1e3f6cdc2b7971ee739626c97e86a558"},"primaryType":"Bid","message":{"amount":100,"bidder":{"userId":323,"wallet":"0x3333333333333333333333333333333333333333"}}}',
                label: 'Data',
                json: true
            }),
        })

        createExecuteContractForm(secretType, {
            walletId: {type: 'wallet-select', label: 'From'},
            to: {type: 'input', label: 'Contract Address', defaultValue: '0xc4375b7de8af5a38a93548eb8453a498222c4ff2'},
            value: {type: 'input', label: 'Amount (in WEI)', defaultValue: '0'},
            functionName: {type: 'input', label: 'Function Name', defaultValue: 'approve'},
            inputs: {
                type: 'textarea',
                label: 'Inputs',
                defaultValue: '[{"type": "address", "value": "0xa7ce868f6490186ac57fa12174df770672ec0950"},{"type": "uint256", "value": "0"}]'
            },
            chainSpecificFields: {
                type: 'textarea',
                label: 'Chain specific fields',
                defaultValue: '{"gasLimit": 145000, "gasPrice": 20000000000}',
                dataName: 'chainSpecific'
            },
            name: {type: 'input', label: 'Network name', placeholder: 'e.g. TestNet', network: true},
            nodeUrl: {
                type: 'input',
                label: 'Network node URL',
                placeholder: 'e.g. https://testnet-avac.arkane.network',
                network: true
            }
        });

        fields.tokenAddress = {
            type: "input",
            label: "Token Address (optional)",
        };
        createExecuteForm(secretType, {
            walletId: fields.walletId,
            to: fields.to,
            value: {type: 'input', label: 'Amount (in AVAC)', defaultValue: '0.0314'},
            tokenAddress: {
                type: 'input',
                label: 'Token address',
                placeholder: 'e.g. 0x6ff6c0ff1d68b964901f986d4c9fa3ac68346570'
            },
            data: fields.data,
            name: fields.name,
            nodeUrl: fields.nodeUrl,
        });
    };


    app.page.initTron = function() {
        var secretType = 'TRON';
        var fields = {
            walletId: {type: 'wallet-select', label: 'From'},
            to: {type: 'input', label: 'To', defaultValue: 'TAwwCCoa6cTjtKJVTSpnKbkDimgALcAXfb'},
            value: {type: 'input', label: 'Amount', defaultValue: '31400'},
            data: {type: 'textarea', label: 'Data (optional)', placeholder: 'Some test data'},
        };
        createSignForm(secretType, 'TRON_TRANSACTION', fields);

        createSignRawForm(secretType, 'TRON_RAW', {
            walletId: fields.walletId,
            data: Object.assign({}, fields.data, {defaultValue: 'Some test data'}),
        });

        createSignMessage(secretType, {
            walletId: fields.walletId,
            data: Object.assign({}, fields.data, {defaultValue: 'Some message', label: 'Message'}),
        });


        var executeFields = fields;
        executeFields.value.defaultValue = '0.0314';
        executeFields.tokenAddress = {
            type: "input",
            label: "Token Address (optional)",
        };
        createExecuteForm(secretType, executeFields);

        createExecuteContractForm(secretType, {
            walletId: {type: 'wallet-select', label: 'From'},
            to: {type: 'input', label: 'Contract Address', defaultValue: 'TQg6nWj5eVNLNiNF8jk3RyQwbzyuyf2rKg'},
            value: {type: 'input', label: 'Amount (in WEI)', defaultValue: '0'},
            functionName: {type: 'input', label: 'Function Name', defaultValue: 'approve'},
            inputs: {type: 'textarea', label: 'Inputs', defaultValue: '[{"type": "address", "value": "TA311N5Thw4vAjjBLNNtqEZp3qVRpeKgHB"},{"type": "uint256", "value": "0"}]'}
        });
    };

    app.page.initGo = function() {
        var secretType = 'GOCHAIN';
        var fields = {
            walletId: {type: 'wallet-select', label: 'From'},
            to: {type: 'input', label: 'To', defaultValue: '0xd84aeb36b2a30eDB94e9f0A25A82E94e506ebB15'},
            value: {type: 'input', label: 'Amount', defaultValue: '32000000000000000'},
            data: {type: 'textarea', label: 'Data (optional)', placeholder: 'Some test data'},
        };
        createSignForm(secretType, 'GOCHAIN_TRANSACTION', fields);
        createSignRawForm(secretType, 'GOCHAIN_RAW', {
            walletId: fields.walletId,
            data: Object.assign({}, fields.data, {defaultValue: 'Some test data'}),
        });
        createSignMessage(secretType, {
            walletId: fields.walletId,
            data: Object.assign({}, fields.data, {defaultValue: 'Some message', label: 'Message'}),
        });

        var executeFields = fields;
        executeFields.value.defaultValue = '0.0321';
        executeFields.tokenAddress = {type: 'input', label: 'Token Address (optional)'};

        createExecuteForm(secretType, executeFields);
    };

    app.page.initVechain = function() {
        var secretType = 'VECHAIN';
        var fields = {
            walletId: {type: 'wallet-select', label: 'From'},
            to: {type: 'input', label: 'To', defaultValue: '0x937bBAc40dA751Ff4C72297DD377Cd4da3Ac1AEE', clause: true},
            amount: {type: 'input', label: 'Amount (WEI)', defaultValue: '31400000000000000', clause: true},
            data: {type: 'textarea', label: 'Data (optional)', clause: true, placeholder: ''},
        };
        createSignForm(secretType, 'VECHAIN_TRANSACTION', fields);

        createSignRawForm('VECHAIN', 'VECHAIN_RAW', {
            walletId: {type: 'wallet-select', label: 'From'},
            data: {type: 'textarea', label: 'Message', defaultValue: 'Sign this message to accept our terms.'},
        });

        createExecuteForm(secretType, {
            walletId: {type: 'wallet-select', label: 'From'},
            to: {type: 'input', label: 'To', defaultValue: '0x937bBAc40dA751Ff4C72297DD377Cd4da3Ac1AEE'},
            value: {type: 'input', label: 'Amount', defaultValue: '0.0314'},
            tokenAddress: {type: 'input', label: 'Token Address (optional)'},
            data: {type: 'textarea', label: 'Data (optional)', placeholder: ''},
        });

        createExecuteContractForm(secretType, {
            walletId: {type: 'wallet-select', label: 'From'},
            to: {type: 'input', label: 'Contract Address', defaultValue: '0x0000000000000000000000000000456E65726779'},
            value: {type: 'input', label: 'Amount (WEI)', defaultValue: '0'},
            functionName: {type: 'input', label: 'Function Name', defaultValue: 'approve'},
            inputs: {
                type: 'textarea',
                label: 'Inputs',
                defaultValue: '[{"type": "address", "value": "0xd82049204D8514c637f150C7231BFefC5C4937Ec"},{"type": "uint256", "value": "0"}]'
            }
        });
    };

    app.page.initBitcoin = function() {
        var secretType = 'BITCOIN';
        createSignForm(secretType, 'BITCOIN_TRANSACTION', {
            walletId: {type: 'wallet-select', label: 'From'},
            to: {type: 'input', label: 'To', defaultValue: 'mikjaeFSKYe6VEC3pQgpYCEwTMYK9Eo5pj'},
            value: {type: 'input', label: 'Amount', defaultValue: '314100'},
        });

        createExecuteForm(secretType, {
            walletId: {type: 'wallet-select', label: 'From'},
            to: {type: 'input', label: 'To', defaultValue: 'mikjaeFSKYe6VEC3pQgpYCEwTMYK9Eo5pj'},
            value: {type: 'input', label: 'Amount (in BTC)', defaultValue: '0.00003141'},
        });
    };

    app.page.initLitecoin = function() {
        var secretType = 'LITECOIN';
        createSignForm(secretType, 'LITECOIN_TRANSACTION', {
            walletId: {type: 'wallet-select', label: 'From'},
            to: {type: 'input', label: 'To', defaultValue: 'LYFYQfkZ4PXp5waKxSpA9H6xXFhTNPRCPe'},
            value: {type: 'input', label: 'Amount', defaultValue: '314100'},
        });

        createExecuteForm(secretType, {
            walletId: {type: 'wallet-select', label: 'From'},
            to: {type: 'input', label: 'To', defaultValue: 'LYFYQfkZ4PXp5waKxSpA9H6xXFhTNPRCPe'},
            value: {type: 'input', label: 'Amount', defaultValue: '0.00003142'},
        });
    };

    app.page.initNeo = function() {
        var secretType = 'NEO';
        var fields = {
            walletId: {type: 'wallet-select', label: 'From'},
            to: {type: 'input', label: 'To', defaultValue: 'AN2VD52SLntUGFwzZyjzsRqBBkUzjKpKpT'},
            value: {type: 'input', label: 'Amount', defaultValue: '1'},
            data: {type: 'textarea', label: 'Data', defaultValue: 'Sign this message to accept our terms.'},
        };

        createSignForm(secretType, 'NEO_NATIVE_TRANSACTION', fields);

        createExecuteForm(secretType, fields);

        createSignRawForm(secretType, 'NEO_MESSAGE', {
            walletId: fields.walletId,
            data: fields.data,
        });

        createSignMessage(secretType, {
            walletId: fields.walletId,
            data: Object.assign({}, fields.data, {defaultValue: 'Some message', label: 'Message'}),
        });

        createExecuteGasForm(secretType, {
            walletId: fields.walletId,
            to: fields.to,
            value: fields.value,
        });

        createExecuteContractForm(secretType, {
            walletId: fields.walletId,
            to: {type: 'input', label: 'Contract Address', defaultValue: '94a24ee381bc386daa91984c7dd606f6fdd8f19e'},
            functionName: {type: 'input', label: 'Function Name', defaultValue: 'approve'},
            value: {type: 'input', label: 'Amount', defaultValue: '0'},
            inputs: {type: 'textarea', label: 'Inputs', defaultValue: '[{"type": "address", "value": "AK2nJJpJr6o664CWJKi1QRXjqeic2zRp8y"},{"type": "integer", "value": "0"}]'},
            chainSpecificFields: {
                type: 'textarea',
                label: 'Chain specific fields',
                defaultValue: '{"networkFee": 0.1, "outputs": [{\"to\":"94a24ee381bc386daa91984c7dd606f6fdd8f19e\",\"amount\":1,\"assetId\":\"602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7\"}]}',
                dataName: 'chainSpecific'
            }
        });
    };

    app.page.initAeternity = function() {
        var secretType = 'AETERNITY';
        var fields = {
            walletId: {type: 'wallet-select', label: 'From'},
            to: {type: 'input', label: 'To', defaultValue: 'ak_v3Sj6XxFKodf2VddPHjPdcQHPRsPVkhSLTN9KKrBkx8aFzg1h'},
            value: {type: 'input', label: 'Amount', defaultValue: '14000000000000000000000'},
            data: {
                type: 'textarea',
                label: 'Data',
                defaultValue: 'tx_+IUrAaEBV1+B/7Cil7dyXcZx2gsXabH8XL5FOFx7WtH8Lq8dYJ0LoQXc8QU36IYbbsXk7d7Lg77BPQuicjS136jJKX5wHepi9QOHAZu6brCYAAAAgicQhDuaygCqKxFM1wuWG58AoFFwNxylSmNg4Pv8OlwzrrPdOBQ95X6DOW+5H6nRMbqY3bEntQ==',
                dataName: 'chainSpecific'
            },
        };
        createSignForm(secretType, 'AETERNITY_TRANSACTION', {
            walletId: fields.walletId,
            to: fields.to,
            value: fields.value
        });

        createSignRawForm(secretType, 'AETERNITY_RAW', {
            walletId: fields.walletId,
            data: fields.data,
        });

        createSignMessage(secretType, {
            walletId: fields.walletId,
            data: Object.assign({}, fields.data, {defaultValue: 'Some message', label: 'Message'}),
        });

        createExecuteForm(secretType, {
            walletId: {type: 'wallet-select', label: 'From'},
            to: {type: 'input', label: 'To', defaultValue: 'ak_v3Sj6XxFKodf2VddPHjPdcQHPRsPVkhSLTN9KKrBkx8aFzg1h'},
            value: {type: 'input', label: 'Amount', defaultValue: '14000'},
        });
    };

    app.page.initHedera = function() {
        var secretType = 'HEDERA';
        var fields = {
            walletId: {type: 'wallet-select', label: 'From'},
            to: {type: 'input', label: 'To', defaultValue: '0.0.2278508'},
            amount: {type: 'input', label: 'Amount (in tinybar)', defaultValue: '314000000'},
        };
        createSignForm(secretType, 'HEDERA_HBAR_TRANSFER', fields);

        createSignRawForm(secretType, 'HEDERA_RAW', {
            walletId: {type: 'wallet-select', label: 'From'},
            data: {type: 'textarea', label: 'Message', defaultValue: 'Sign this message to accept our terms.'},
        });

        createForm(
            'Execute tokens association',
            secretType,
            'associate-tokens',
            {
                walletId: {type: 'wallet-select', label: 'From'},
                tokenIds: {type: 'input', label: 'tokenIDs (comma separated)'}
            },
            executeNativeTransaction,
            {
                secretType,
                type: 'HEDERA_TOKEN_ASSOCIATION',
            }
        );

        createExecuteForm(secretType, {
            walletId: fields.walletId,
            to: fields.to,
            tokenAddress: {type: "input", label: "Token ID (optional)"},
            value: {type: 'input', label: 'Amount (in HBAR)', defaultValue: '0.0314'},
            chainSpecificFields: {type: 'textarea', label: 'Chain specific fields', defaultValue: '{"transactionMemo": "0.0.2810009"}', dataName: 'chainSpecific'},
        });

        createForm(
            'Approve allowance',
            secretType,
            'approve-allowance',
            {
                walletId: fields.walletId,
                allowanceType: {type: "select", label: 'Type', values: ['HBAR', 'TOKEN', 'NFT', 'NFT_ALL']},
                spenderAccount: {type: "input", label: "Spender account"},
                amount: {type: 'input', label: 'Amount'},
                tokenId: {type: 'input', label: 'Token ID'},
                serial: {type: 'input', label: 'Serial'},
            },
            executeNativeTransaction,
            {
                secretType,
                type: 'HEDERA_APPROVE_ALLOWANCE',
            }
        );
    }

    app.page.initImx = function() {
        var secretType = 'IMX';
        var fields = {
            walletId: {type: 'wallet-select', label: 'From'},
            to: {type: 'input', label: 'To', defaultValue: '0x937bBAc40dA751Ff4C72297DD377Cd4da3Ac1AEE'},
            amount: {type: 'input', label: 'Amount (Raw)', defaultValue: '314000000'},
        };

        createSignRawForm(secretType, 'IMX_RAW', {
            walletId: {type: 'wallet-select', label: 'From'},
            data: {type: 'textarea', label: 'Message', defaultValue: 'Sign this message to accept our terms.'},
        });

        createExecuteForm(secretType, {
            walletId: fields.walletId,
            to: fields.to,
            value: {type: 'input', label: 'Amount (in ETH)', defaultValue: '0.0314'},
            tokenAddress: {
                type: 'input',
                label: 'Token address',
                placeholder: 'e.g. 0x6ff6c0ff1d68b964901f986d4c9fa3ac68346570'
            },
        });

    }

