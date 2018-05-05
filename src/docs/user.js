/**
* @class
* This namespace contains methods and types related to the currently logged in user.
*/
var User = /** @lends User */ {

	/**
	 * Get the email address of the currently logged in user.
	 * ^gmail
	 * ^inbox
	 * @return {string}
	 */
	getEmailAddress: function(){},

	/**
	 * Is the currently tab the new material Gmail interface
	 * ^gmail
	 * @return {boolean}
	 */
	isUsingGmailMaterialUI: function(){},

	/**
	 * Is conversation view disabled by the user
	 * ^gmail
	 * @return {boolean}
	 */
	isConversationViewDisabled: function(){},

	/**
	 * Get the current locale code of Gmail
	 * ^gmail
	 * @return {string}
	 */
	getLanguage: function(){},

	/**
	 * Get the details of all of the user's accounts from the account switcher.
	 * ^gmail
	 * @return {Contact[]}
	 */
	getAccountSwitcherContactList: function(){}

};
