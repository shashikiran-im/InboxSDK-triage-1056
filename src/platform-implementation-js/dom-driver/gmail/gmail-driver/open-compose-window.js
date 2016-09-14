/* @flow */

import simulateClick from '../../../lib/dom/simulate-click';
import GmailElementGetter from '../gmail-element-getter';

import waitFor from '../../../lib/wait-for';

import type GmailDriver from '../gmail-driver';

export default async function openComposeWindow(gmailDriver: GmailDriver){
	await GmailElementGetter.waitForGmailModeToSettle();

	if(GmailElementGetter.isStandaloneComposeWindow() || GmailElementGetter.isStandaloneThreadWindow()){
		//do nothing
		return;
	}

	if (!GmailElementGetter.getComposeButton()) {
		await waitFor(() => !!GmailElementGetter.getComposeButton());
	}

	simulateClick(GmailElementGetter.getComposeButton());
};
