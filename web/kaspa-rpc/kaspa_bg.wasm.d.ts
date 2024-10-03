/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function __wbg_address_free(a: number, b: number): void;
export function address_constructor(a: number, b: number): number;
export function address_validate(a: number, b: number): number;
export function address_toString(a: number, b: number): void;
export function address_version(a: number, b: number): void;
export function address_prefix(a: number, b: number): void;
export function address_set_setPrefix(a: number, b: number, c: number): void;
export function address_payload(a: number, b: number): void;
export function address_short(a: number, b: number, c: number): void;
export function __wbg_utxoentry_free(a: number, b: number): void;
export function __wbg_get_utxoentry_address(a: number): number;
export function __wbg_set_utxoentry_address(a: number, b: number): void;
export function __wbg_get_utxoentry_outpoint(a: number): number;
export function __wbg_set_utxoentry_outpoint(a: number, b: number): void;
export function __wbg_get_utxoentry_amount(a: number): number;
export function __wbg_set_utxoentry_amount(a: number, b: number): void;
export function __wbg_get_utxoentry_scriptPublicKey(a: number): number;
export function __wbg_set_utxoentry_scriptPublicKey(a: number, b: number): void;
export function __wbg_get_utxoentry_blockDaaScore(a: number): number;
export function __wbg_set_utxoentry_blockDaaScore(a: number, b: number): void;
export function __wbg_get_utxoentry_isCoinbase(a: number): number;
export function __wbg_set_utxoentry_isCoinbase(a: number, b: number): void;
export function utxoentry_toString(a: number, b: number): void;
export function __wbg_utxoentryreference_free(a: number, b: number): void;
export function utxoentryreference_toString(a: number, b: number): void;
export function utxoentryreference_entry(a: number): number;
export function utxoentryreference_outpoint(a: number): number;
export function utxoentryreference_address(a: number): number;
export function utxoentryreference_amount(a: number): number;
export function utxoentryreference_isCoinbase(a: number): number;
export function utxoentryreference_blockDaaScore(a: number): number;
export function utxoentryreference_scriptPublicKey(a: number): number;
export function __wbg_utxoentries_free(a: number, b: number): void;
export function utxoentries_js_ctor(a: number, b: number): void;
export function utxoentries_get_items_as_js_array(a: number): number;
export function utxoentries_set_items_from_js_array(a: number, b: number): void;
export function utxoentries_sort(a: number): void;
export function utxoentries_amount(a: number): number;
export function __wbg_transactionoutput_free(a: number, b: number): void;
export function transactionoutput_ctor(a: number, b: number): number;
export function transactionoutput_value(a: number): number;
export function transactionoutput_set_value(a: number, b: number): void;
export function transactionoutput_scriptPublicKey(a: number): number;
export function transactionoutput_set_scriptPublicKey(a: number, b: number): void;
export function __wbg_transaction_free(a: number, b: number): void;
export function transaction_is_coinbase(a: number): number;
export function transaction_finalize(a: number, b: number): void;
export function transaction_id(a: number, b: number): void;
export function transaction_constructor(a: number, b: number): void;
export function transaction_get_inputs_as_js_array(a: number): number;
export function transaction_addresses(a: number, b: number, c: number): void;
export function transaction_set_inputs_from_js_array(a: number, b: number): void;
export function transaction_get_outputs_as_js_array(a: number): number;
export function transaction_set_outputs_from_js_array(a: number, b: number): void;
export function transaction_version(a: number): number;
export function transaction_set_version(a: number, b: number): void;
export function transaction_lockTime(a: number): number;
export function transaction_set_lockTime(a: number, b: number): void;
export function transaction_gas(a: number): number;
export function transaction_set_gas(a: number, b: number): void;
export function transaction_get_subnetwork_id_as_hex(a: number, b: number): void;
export function transaction_set_subnetwork_id_from_js_value(a: number, b: number): void;
export function transaction_get_payload_as_hex_string(a: number, b: number): void;
export function transaction_set_payload_from_js_value(a: number, b: number): void;
export function transaction_get_mass(a: number): number;
export function transaction_set_mass(a: number, b: number): void;
export function transaction_serializeToObject(a: number, b: number): void;
export function transaction_serializeToJSON(a: number, b: number): void;
export function transaction_serializeToSafeJSON(a: number, b: number): void;
export function transaction_deserializeFromObject(a: number, b: number): void;
export function transaction_deserializeFromJSON(a: number, b: number, c: number): void;
export function transaction_deserializeFromSafeJSON(a: number, b: number, c: number): void;
export function transactionsigninghashecdsa_new(): number;
export function transactionsigninghashecdsa_update(a: number, b: number, c: number): void;
export function transactionsigninghashecdsa_finalize(a: number, b: number): void;
export function __wbg_transactionsigninghashecdsa_free(a: number, b: number): void;
export function transactionsigninghash_new(): number;
export function transactionsigninghash_update(a: number, b: number, c: number): void;
export function transactionsigninghash_finalize(a: number, b: number): void;
export function __wbg_transactionsigninghash_free(a: number, b: number): void;
export function __wbg_transactioninput_free(a: number, b: number): void;
export function transactioninput_constructor(a: number, b: number): void;
export function transactioninput_get_previous_outpoint(a: number): number;
export function transactioninput_set_previous_outpoint(a: number, b: number, c: number): void;
export function transactioninput_get_signature_script_as_hex(a: number, b: number): void;
export function transactioninput_set_signature_script_from_js_value(a: number, b: number, c: number): void;
export function transactioninput_get_sequence(a: number): number;
export function transactioninput_set_sequence(a: number, b: number): void;
export function transactioninput_get_sig_op_count(a: number): number;
export function transactioninput_set_sig_op_count(a: number, b: number): void;
export function transactioninput_get_utxo(a: number): number;
export function isScriptPayToScriptHash(a: number, b: number): void;
export function isScriptPayToPubkeyECDSA(a: number, b: number): void;
export function isScriptPayToPubkey(a: number, b: number): void;
export function addressFromScriptPublicKey(a: number, b: number, c: number): void;
export function payToScriptHashSignatureScript(a: number, b: number, c: number): void;
export function payToScriptHashScript(a: number, b: number): void;
export function payToAddressScript(a: number, b: number): void;
export function __wbg_transactionoutpoint_free(a: number, b: number): void;
export function transactionoutpoint_ctor(a: number, b: number): number;
export function transactionoutpoint_getId(a: number, b: number): void;
export function transactionoutpoint_transactionId(a: number, b: number): void;
export function transactionoutpoint_index(a: number): number;
export function header_constructor(a: number, b: number): void;
export function header_finalize(a: number, b: number): void;
export function header_asJSON(a: number, b: number): void;
export function header_get_version(a: number): number;
export function header_set_version(a: number, b: number): void;
export function header_get_timestamp(a: number): number;
export function header_set_timestamp(a: number, b: number): void;
export function header_bits(a: number): number;
export function header_set_bits(a: number, b: number): void;
export function header_nonce(a: number): number;
export function header_set_nonce(a: number, b: number): void;
export function header_daa_score(a: number): number;
export function header_set_daa_score(a: number, b: number): void;
export function header_blue_score(a: number): number;
export function header_set_blue_score(a: number, b: number): void;
export function header_get_hash_as_hex(a: number, b: number): void;
export function header_get_hash_merkle_root_as_hex(a: number, b: number): void;
export function header_set_hash_merkle_root_from_js_value(a: number, b: number): void;
export function header_get_accepted_id_merkle_root_as_hex(a: number, b: number): void;
export function header_set_accepted_id_merkle_root_from_js_value(a: number, b: number): void;
export function header_get_utxo_commitment_as_hex(a: number, b: number): void;
export function header_set_utxo_commitment_from_js_value(a: number, b: number): void;
export function header_get_pruning_point_as_hex(a: number, b: number): void;
export function header_set_pruning_point_from_js_value(a: number, b: number): void;
export function header_get_parents_by_level_as_js_value(a: number): number;
export function header_set_parents_by_level_from_js_value(a: number, b: number): void;
export function header_blue_work(a: number): number;
export function header_getBlueWorkAsHex(a: number, b: number): void;
export function header_set_blue_work_from_js_value(a: number, b: number): void;
export function __wbg_header_free(a: number, b: number): void;
export function __wbg_networkid_free(a: number, b: number): void;
export function __wbg_get_networkid_type(a: number): number;
export function __wbg_set_networkid_type(a: number, b: number): void;
export function __wbg_get_networkid_suffix(a: number, b: number): void;
export function __wbg_set_networkid_suffix(a: number, b: number, c: number): void;
export function networkid_ctor(a: number, b: number): void;
export function networkid_id(a: number, b: number): void;
export function networkid_addressPrefix(a: number, b: number): void;
export function networkid_toString(a: number, b: number): void;
export function __wbg_scriptpublickey_free(a: number, b: number): void;
export function __wbg_get_scriptpublickey_version(a: number): number;
export function __wbg_set_scriptpublickey_version(a: number, b: number): void;
export function scriptpublickey_constructor(a: number, b: number, c: number): void;
export function scriptpublickey_script_as_hex(a: number, b: number): void;
export function __wbg_sighashtype_free(a: number, b: number): void;
export function __wbg_transactionutxoentry_free(a: number, b: number): void;
export function __wbg_get_transactionutxoentry_amount(a: number): number;
export function __wbg_set_transactionutxoentry_amount(a: number, b: number): void;
export function __wbg_get_transactionutxoentry_scriptPublicKey(a: number): number;
export function __wbg_set_transactionutxoentry_scriptPublicKey(a: number, b: number): void;
export function __wbg_get_transactionutxoentry_blockDaaScore(a: number): number;
export function __wbg_set_transactionutxoentry_blockDaaScore(a: number, b: number): void;
export function __wbg_get_transactionutxoentry_isCoinbase(a: number): number;
export function __wbg_set_transactionutxoentry_isCoinbase(a: number, b: number): void;
export function __wbg_hash_free(a: number, b: number): void;
export function hash_constructor(a: number, b: number): number;
export function hash_toString(a: number, b: number): void;
export function version(a: number): void;
export function __wbg_nodedescriptor_free(a: number, b: number): void;
export function __wbg_get_nodedescriptor_uid(a: number, b: number): void;
export function __wbg_set_nodedescriptor_uid(a: number, b: number, c: number): void;
export function __wbg_get_nodedescriptor_url(a: number, b: number): void;
export function __wbg_set_nodedescriptor_url(a: number, b: number, c: number): void;
export function resolver_urls(a: number): number;
export function resolver_getNode(a: number, b: number, c: number): number;
export function resolver_getUrl(a: number, b: number, c: number): number;
export function resolver_connect(a: number, b: number): number;
export function resolver_ctor(a: number, b: number): void;
export function __wbg_resolver_free(a: number, b: number): void;
export function rpcclient_getBlockCount(a: number, b: number): number;
export function rpcclient_getBlockDagInfo(a: number, b: number): number;
export function rpcclient_getCoinSupply(a: number, b: number): number;
export function rpcclient_getConnectedPeerInfo(a: number, b: number): number;
export function rpcclient_getInfo(a: number, b: number): number;
export function rpcclient_getPeerAddresses(a: number, b: number): number;
export function rpcclient_getMetrics(a: number, b: number): number;
export function rpcclient_getConnections(a: number, b: number): number;
export function rpcclient_getSink(a: number, b: number): number;
export function rpcclient_getSinkBlueScore(a: number, b: number): number;
export function rpcclient_ping(a: number, b: number): number;
export function rpcclient_shutdown(a: number, b: number): number;
export function rpcclient_getServerInfo(a: number, b: number): number;
export function rpcclient_getSyncStatus(a: number, b: number): number;
export function rpcclient_addPeer(a: number, b: number): number;
export function rpcclient_ban(a: number, b: number): number;
export function rpcclient_estimateNetworkHashesPerSecond(a: number, b: number): number;
export function rpcclient_getBalanceByAddress(a: number, b: number): number;
export function rpcclient_getBalancesByAddresses(a: number, b: number): number;
export function rpcclient_getBlock(a: number, b: number): number;
export function rpcclient_getBlocks(a: number, b: number): number;
export function rpcclient_getBlockTemplate(a: number, b: number): number;
export function rpcclient_getCurrentBlockColor(a: number, b: number): number;
export function rpcclient_getDaaScoreTimestampEstimate(a: number, b: number): number;
export function rpcclient_getFeeEstimate(a: number, b: number): number;
export function rpcclient_getFeeEstimateExperimental(a: number, b: number): number;
export function rpcclient_getCurrentNetwork(a: number, b: number): number;
export function rpcclient_getHeaders(a: number, b: number): number;
export function rpcclient_getMempoolEntries(a: number, b: number): number;
export function rpcclient_getMempoolEntriesByAddresses(a: number, b: number): number;
export function rpcclient_getMempoolEntry(a: number, b: number): number;
export function rpcclient_getSubnetwork(a: number, b: number): number;
export function rpcclient_getUtxosByAddresses(a: number, b: number): number;
export function rpcclient_getVirtualChainFromBlock(a: number, b: number): number;
export function rpcclient_resolveFinalityConflict(a: number, b: number): number;
export function rpcclient_submitBlock(a: number, b: number): number;
export function rpcclient_submitTransaction(a: number, b: number): number;
export function rpcclient_submitTransactionReplacement(a: number, b: number): number;
export function rpcclient_unban(a: number, b: number): number;
export function rpcclient_subscribeBlockAdded(a: number): number;
export function rpcclient_unsubscribeBlockAdded(a: number): number;
export function rpcclient_subscribeFinalityConflict(a: number): number;
export function rpcclient_unsubscribeFinalityConflict(a: number): number;
export function rpcclient_subscribeFinalityConflictResolved(a: number): number;
export function rpcclient_unsubscribeFinalityConflictResolved(a: number): number;
export function rpcclient_subscribeSinkBlueScoreChanged(a: number): number;
export function rpcclient_unsubscribeSinkBlueScoreChanged(a: number): number;
export function rpcclient_subscribePruningPointUtxoSetOverride(a: number): number;
export function rpcclient_unsubscribePruningPointUtxoSetOverride(a: number): number;
export function rpcclient_subscribeNewBlockTemplate(a: number): number;
export function rpcclient_unsubscribeNewBlockTemplate(a: number): number;
export function rpcclient_subscribeVirtualDaaScoreChanged(a: number): number;
export function rpcclient_unsubscribeVirtualDaaScoreChanged(a: number): number;
export function rpcclient_subscribeUtxosChanged(a: number, b: number): number;
export function rpcclient_unsubscribeUtxosChanged(a: number, b: number): number;
export function rpcclient_subscribeVirtualChainChanged(a: number, b: number): number;
export function rpcclient_unsubscribeVirtualChainChanged(a: number, b: number): number;
export function rpcclient_defaultPort(a: number, b: number, c: number): void;
export function rpcclient_parseUrl(a: number, b: number, c: number, d: number, e: number): void;
export function rpcclient_ctor(a: number, b: number): void;
export function rpcclient_url(a: number, b: number): void;
export function rpcclient_resolver(a: number): number;
export function rpcclient_setResolver(a: number, b: number, c: number): void;
export function rpcclient_setNetworkId(a: number, b: number, c: number): void;
export function rpcclient_isConnected(a: number): number;
export function rpcclient_encoding(a: number, b: number): void;
export function rpcclient_nodeId(a: number, b: number): void;
export function rpcclient_connect(a: number, b: number): number;
export function rpcclient_disconnect(a: number): number;
export function rpcclient_start(a: number): number;
export function rpcclient_stop(a: number): number;
export function rpcclient_triggerAbort(a: number): void;
export function rpcclient_addEventListener(a: number, b: number, c: number, d: number): void;
export function rpcclient_removeEventListener(a: number, b: number, c: number, d: number): void;
export function rpcclient_clearEventListener(a: number, b: number, c: number): void;
export function rpcclient_removeAllEventListeners(a: number, b: number): void;
export function __wbg_rpcclient_free(a: number, b: number): void;
export function rustsecp256k1_v0_10_0_context_create(a: number): number;
export function rustsecp256k1_v0_10_0_context_destroy(a: number): void;
export function rustsecp256k1_v0_10_0_default_illegal_callback_fn(a: number, b: number): void;
export function rustsecp256k1_v0_10_0_default_error_callback_fn(a: number, b: number): void;
export function __wbg_aborted_free(a: number, b: number): void;
export function __wbg_abortable_free(a: number, b: number): void;
export function abortable_new(): number;
export function abortable_isAborted(a: number): number;
export function abortable_abort(a: number): void;
export function abortable_check(a: number, b: number): void;
export function abortable_reset(a: number): void;
export function setLogLevel(a: number): void;
export function defer(): number;
export function presentPanicHookLogs(): void;
export function initConsolePanicHook(): void;
export function initBrowserPanicHook(): void;
export function initWASM32Bindings(a: number, b: number): void;
export function __wbindgen_export_0(a: number, b: number): number;
export function __wbindgen_export_1(a: number, b: number, c: number, d: number): number;
export const __wbindgen_export_2: WebAssembly.Table;
export function __wbindgen_export_3(a: number, b: number, c: number): void;
export function __wbindgen_export_4(a: number, b: number): void;
export function __wbindgen_export_5(a: number, b: number, c: number): void;
export function __wbindgen_export_6(a: number, b: number, c: number): void;
export function __wbindgen_export_7(a: number, b: number, c: number, d: number): number;
export function __wbindgen_export_8(a: number, b: number): void;
export function __wbindgen_export_9(a: number, b: number, c: number): void;
export function __wbindgen_export_10(a: number, b: number): void;
export function __wbindgen_export_11(a: number): void;
export function __wbindgen_export_12(a: number, b: number, c: number, d: number): void;
export function __wbindgen_add_to_stack_pointer(a: number): number;
export function __wbindgen_export_13(a: number, b: number, c: number): void;
