    'use strict';

    window.app = window.app || {};
    app.page = app.page || {};
    app.localStorageKeys = app.localStorageKeys || {};
    app.localStorageKeys.activeChain = 'arketype.activeChain';


    app.page.addConnectEvents = function(getWalletsButtonSelector,
                                         getWalletsCallback) {
        app.page.initTabChangeEvent(getWalletsButtonSelector, getWalletsCallback);
        app.page.setActiveTab(app.page.getActiveTab(), true);
        app.page.initGetProfileEvent();

        app.page.initAeternity();
        app.page.initEthereum();
        app.page.initMatic();
        app.page.initBsc();
        app.page.initAvac();
        app.page.initTron();
        app.page.initGo();
        app.page.initVechain();
        app.page.initBitcoin();
        app.page.initLitecoin();
        app.page.initNeo();
        app.page.initHedera();
        app.page.initImx();
        app.page.initArbitrum();
        app.page.initXPLA();
        app.page.initBase();
        app.page.initOptimism();
        app.page.initSolana();
        app.page.initialised = true;
    };

    app.page.initTabChangeEvent = function(selector,
                                           callback) {
        $('[data-toggle="tab"]').on('shown.bs.tab', function(e) {
            var button = document.querySelector($(e.target).attr('href') + ' ' + selector);
            if (button && button.dataset['success'] !== 'true') {
                if (localStorage && button.dataset.chain) {
                    app.page.setActiveTab(button.dataset.chain, false);
                }
                callback(button);
            }
        });
    };

    function sign(signData) {
        console.debug('Signing', signData);
        window.venlyConnect.createSigner().sign(signData)
              .then(function(result) {
                  app.log(result);
              })
              .catch(function(err) {
                  app.error(err);
              });
    }

    function signMessage(message) {
        console.debug('Signing message', message);
        window.venlyConnect.createSigner().signMessage(message)
              .then(function(result) {
                  app.log(result);
              })
              .catch(function(err) {
                  app.error(err);
              });
    }

    function signEip712(data) {
        console.log('Signing eip712 message', data);
        window.venlyConnect.createSigner().signEip712(data)
              .then(function(result) {
                  app.log(result);
              })
              .catch(function(err) {
                  app.error(err);
              });
    }

    function executeTransaction(executeData) {
        let token = executeData.tokenAddress;
        if (token && token.length > 0) {
            executeTokenTransfer(executeData);
        } else {
            executeTransfer(executeData);
        }
    }

    function executeTransfer(executeData) {
        console.debug('Executing transaction', executeData);
        window.venlyConnect.createSigner().executeTransfer(executeData)
              .then(function(result) {
                  app.log(result);
              })
              .catch(function(err) {
                  app.error(err);
              });
    }

    function executeTokenTransfer(executeData) {
        console.debug('Executing token transaction', executeData);
        window.venlyConnect.createSigner().executeTokenTransfer(executeData)
              .then(function(result) {
                  app.log(result);
              })
              .catch(function(err) {
                  app.error(err);
              });
    }

    function executeGasTransaction(executeData) {
        console.debug('Executing gas transaction', executeData);
        window.venlyConnect.createSigner().executeGasTransfer(executeData)
              .then(function(result) {
                  app.log(result);
              })
              .catch(function(err) {
                  app.error(err);
              });
    }

    function executeContract(executeData) {
        console.debug('Executing contract', executeData);
        window.venlyConnect.createSigner().executeContract(executeData)
              .then(function(result) {
                  app.log(result);
              })
              .catch(function(err) {
                  app.error(err);
              });
    }

    function readContract(readData) {
        console.debug('Reading contract', readData);
        window.venlyConnect.api.readContract(readData)
              .then(function(result) {
                  app.log(result);
              })
              .catch(function(err) {
                  app.error(err);
              });
    }

    function executeNativeTransaction(executeData) {
        console.debug('Executing native transaction', executeData);
        window.venlyConnect.createSigner().executeNativeTransaction(executeData)
              .then(function(result) {
                  app.log(result);
              })
              .catch(function(err) {
                  app.error(err);
              });
    }

    function importWallet(request) {
        console.debug('Importing wallet', request);
        window.venlyConnect.createSigner().importWallet(request)
              .then(function(result) {
                  app.log(result);
              })
              .catch(function(err) {
                  app.error(err);
              });
    }

    app.page.updateWallets = function(wallets,
                                      secretType) {
        const dataSetName = 'wallets' + secretType.charAt(0).toUpperCase() + secretType.slice(1).toLowerCase();
        document.querySelector('body').dataset[dataSetName] = JSON.stringify(wallets);
        var $forms = $('[data-form][data-chain="' + secretType.toUpperCase() + '"]');
        $forms.each(function() {
            $('select[name="walletId"]', this).find('option').remove();
            $('select[name="walletId"]', this).append($('<option>', {
                value: '',
                text: '-- No Wallet Selected --',
                'data-address': '',
            }));
        });

        for (var w of wallets) {
            $forms.each(function() {
                $('select[name="walletId"]', this).append($('<option>', {
                    value: w.id,
                    text: w.description ? w.description + ' - ' + w.address : w.address,
                    'data-address': w.address,
                }));
            });
        }

        $('select[name="walletId"]', $forms).each(function() {
            if (this.length > 1) {
                this.selectedIndex = 1;
            }
        });
    };

    app.page.setActiveTab = function(secretType,
                                     selectTab) {
        if (typeof secretType !== 'undefined') {
            if (localStorage) {
                localStorage.setItem(app.localStorageKeys.activeChain, secretType);
            }
            if (selectTab) {
                $('#nav-' + secretType + '-tab').trigger('click');
            }
        }
    };

    app.page.getActiveTab = function() {
        return (localStorage && localStorage.getItem(app.localStorageKeys.activeChain)) || 'ETHEREUM';
    };

    function createFormField(id,
                             label,
                             secretType,
                             field) {
        var htmlGroup = document.createElement('div');
        htmlGroup.className = 'form-group row';
        var htmlLabel = document.createElement('label');
        htmlLabel.htmlFor = id;
        htmlLabel.innerHTML = label;
        htmlLabel.className = 'col-sm-5 col-form-label';
        var htmlFieldCol = document.createElement('div');
        htmlFieldCol.className = 'col-sm-7';

        var htmlField;

        switch (field.type.toLowerCase()) {
            case 'textarea':
                htmlField = document.createElement('textarea');
                htmlField.rows = '4';
                htmlFieldCol.appendChild(htmlField);
                break;
            case 'wallet-select':
                htmlField = document.createElement('select');
                var htmlInputGroup = document.createElement('div');
                htmlInputGroup.className = 'input-group';
                var htmlInputGroupAppend = document.createElement('div');
                htmlInputGroupAppend.className = 'input-group-append';
                var htmlCopyButton = document.createElement('button');
                htmlCopyButton.type = 'button';
                htmlCopyButton.dataset.id = id;
                htmlCopyButton.className = 'btn btn-outline-secondary';
                htmlCopyButton.title = 'Copy';
                htmlCopyButton.addEventListener('click', function(e) {
                    app.copySelectDataAddress('#' + id);
                });
                var htmlCopyIcon = document.createElement('i');
                htmlCopyIcon.className = 'fa fa-copy';
                htmlCopyButton.appendChild(htmlCopyIcon);
                htmlInputGroupAppend.appendChild(htmlCopyButton);
                htmlInputGroup.appendChild(htmlField);
                htmlInputGroup.appendChild(htmlInputGroupAppend);
                htmlFieldCol.appendChild(htmlInputGroup);
                var htmlUnlinkButton = document.createElement('button');
                htmlUnlinkButton.type = 'button';
                htmlUnlinkButton.dataset.id = id;
                htmlUnlinkButton.className = 'btn btn-outline-secondary';
                htmlUnlinkButton.title = 'Unlink';
                htmlUnlinkButton.addEventListener('click', function(e) {
                    unlinkWallet('#' + id, secretType);
                });
                var htmlUnlinkIcon = document.createElement('i');
                htmlUnlinkIcon.className = 'fa fa-unlink';
                htmlUnlinkButton.appendChild(htmlUnlinkIcon);
                htmlInputGroupAppend.appendChild(htmlUnlinkButton);
                break;
            case 'checkbox':
                htmlField = document.createElement('input');
                htmlField.type = 'checkbox';
                if (field.checked) {
                    htmlField.setAttribute('checked', 'checked');
                }
                htmlFieldCol.appendChild(htmlField);
                break;
            case 'select':
                var htmlInputGroup = document.createElement('div');
                htmlInputGroup.className = 'input-group';
                htmlField = document.createElement('select');
                for (var index in field.values) {
                    var option = document.createElement('option');
                    option.value = field.values[index];
                    option.text = field.values[index];
                    htmlField.appendChild(option)
                }
                htmlInputGroup.appendChild(htmlField);
                htmlFieldCol.appendChild(htmlInputGroup);
                break;
            default:
                htmlField = document.createElement(field.type);
                htmlFieldCol.appendChild(htmlField);
                break;
        }

        htmlField.className = 'form-control';
        htmlField.name = field.name;
        htmlField.id = id;
        htmlField.placeholder = field.placeholder;
        htmlField.value = field.defaultValue;
        if (field.dataName) {
            htmlField.dataset[field.dataName] = true;
        } else {
            var cleanLabel = label.toLowerCase().split(' ')[0];
            htmlField.dataset[cleanLabel] = true;
        }

        if (field.info) {
            var htmlInfo = document.createElement('small');
            htmlInfo.className = 'form-text text-muted';
            htmlInfo.innerHTML = field.info;
            htmlFieldCol.appendChild(htmlInfo);
        }

        htmlGroup.appendChild(htmlLabel);
        htmlGroup.appendChild(htmlFieldCol);
        return htmlGroup;
    }

    function createHtmlFieldSet(title,
                                prefix,
                                secretType,
                                fields) {
        var fieldSet = document.createElement('fieldset');
        fieldSet.className = 'card-body';
        var htmlLegend = document.createElement('legend');
        htmlLegend.className = 'card-title';
        htmlLegend.innerHTML = title;
        fieldSet.appendChild(htmlLegend);

        var keys = Object.keys(fields);
        for (var keyIndex in keys) {
            var name = keys[keyIndex];
            var fieldId = prefix + '-' + secretType + '-' + name;

            var htmlField = createFormField(fieldId, fields[name].label, secretType, {
                type: fields[name].type,
                name,
                defaultValue: fields[name].defaultValue || '',
                checked: fields[name].checked || false,
                info: fields[name].info || false,
                dataName: fields[name].dataName,
                placeholder: fields[name].placeholder || name,
                values: fields[name].values
            });
            fieldSet.appendChild(htmlField);
        }
        $(fieldSet).append($('<div class="row"><div class="offset-5 col-7"><button type="submit" class="btn btn-primary">Submit</button></div></div>'));
        return fieldSet;
    }

    function addFormSubmitListener(form,
                                   fields,
                                   defaultData,
                                   transactionFunction) {
        var keys = Object.keys(fields);
        form.addEventListener('submit', function(e) {
            e.stopPropagation();
            e.preventDefault();
            console.log('submitting...');
            var data = Object.assign({}, defaultData);
            var clause = {};
            var contractCall = {};
            var network = {};
            for (var keyIndex in keys) {
                var key = keys[keyIndex];
                var name = key;
                var type = fields[name].type;
                var $element = $('[name="' + name + '"]', form);
                var value;

                if (type.toLowerCase() === 'checkbox') {
                    value = $element.length > 0 ? $element.is(':checked') : null;
                } else {
                    value = $element.val() || null;
                }

                if (name === 'hash') {
                    var $prefix = $('[name="prefix"]', form);
                    value = $prefix.length > 0 && $prefix.is(':checked') ? true : value;
                }
                if (name === 'inputs') {
                    value = JSON.parse(value);
                }
                if (name === 'outputs') {
                    value = JSON.parse(value);
                }
                if (name === 'chainSpecificFields') {
                    value = JSON.parse(value);
                }

                if (name === 'data' && fields.data.json) {
                    value = JSON.parse(value);
                }

                if (name === 'tokenIds') {
                    value = value.split(',');
                }

                if (fields[name].clause) {
                    clause[name] = value;
                } else if (fields[name].network) {
                    if (value) {
                        network[name] = value;
                    }
                } else {
                    data[name] = value;
                }
            }
            if (Object.keys(clause).length > 0) {
                data.clauses = [clause];
            }
            if (Object.keys(network).length > 0) {
                data.network = network;
            }
            transactionFunction(data);
        });
    }

    function createForm(title,
                        secretType,
                        formType,
                        fields,
                        transactionFunction,
                        defaultData) {
        var fieldSet = createHtmlFieldSet(title, formType, secretType, fields);
        var formSign = document.querySelector('[data-form="' + formType + '"][data-chain="' + secretType + '"]');
        if (formSign) {
            formSign.appendChild(fieldSet);
            addFormSubmitListener(formSign, fields, defaultData, transactionFunction);
        }
    }

    function createSignForm(secretType,
                            transactionType,
                            fields) {
        createForm('Sign Transaction', secretType, 'sign', fields, sign, {
            type: transactionType,
            submit: false,
        });
    }

    function createSignRawForm(secretType,
                               transactionType,
                               fields) {
        createForm('Sign Raw Data', secretType, 'sign-raw', fields, sign, {
            type: transactionType,
        });
    }

    function createSignMessage(secretType,
                               fields) {
        createForm('Sign Message', secretType, 'sign-message', fields, signMessage, {
            secretType,
        });
    }

    function createSignEip712(secretType,
                              fields) {
        createForm('Sign EIP712', secretType, 'sign-eip712', fields, signEip712, {
            secretType,
        });
    }

    function createExecuteContractForm(secretType,
                                       fields, title = 'Execute contract transaction') {
        createForm(title, secretType, 'execute-contract', fields, executeContract, {
            secretType,
            type: 'CONTRACT_EXECUTION',
        });
    }

    function createReadContractForm(secretType,
                                    fields, title = 'Read contract') {
        createForm(title, secretType, 'read-contract', fields, readContract, {
            secretType,
            type: 'READ_CONTRACT',
        });
    }

    function createExecuteForm(secretType,
                               fields) {
        createForm('Execute Transaction', secretType, 'execute', fields, executeTransaction, {
            secretType,
        });
    }

    function createExecuteGasForm(secretType,
                                  fields) {
        createForm(`Execute gas transfer`, secretType, 'execute-gas', fields, executeGasTransaction, {
            secretType,
            type: 'GAS_TRANSFER',
        });
    }

    function createImportWalletForm(secretType,
                                    fields) {
        createForm(`Export wallet to`, secretType, 'import-wallet', fields, importWallet, {
            secretType
        });
    }

    function unlinkWallet(selector,
                          secretType) {
        var $select = $(selector);
        var value = $select.val();

        window.venlyConnect.api.unlink(value)
              .then(function(result) {
                  return window.venlyConnect.api.getWallets({secretType: secretType})
                               .then(function(wallets) {
                                   wallets = wallets.filter((wallet) => wallet.walletType !== 'APPLICATION');
                                   app.page.updateWallets(wallets, secretType);
                               });
              })
              .catch(function(err) {
                  app.error(err);
              });

    }
