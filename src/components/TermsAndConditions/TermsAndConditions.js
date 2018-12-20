// @flow

import React, { PureComponent } from 'react';
import { ScrollView, View } from 'react-native';

import {
  Text,
  Button,
} from 'UI';

import styles from './TermsAndConditions.css.js';

import Condition from './Condition.js';

type Props = {
  accept: () => void,
  cancel: () => void,
};

export default class TermsAndConditions extends PureComponent<Props> {
  render() {
    const {
      cancel,
      accept,
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.actions}>
          <Button
            label="Accept Terms"
            onPress={accept}
          />
          <Button
            backgroundColor="transparent"
            label="Cancel"
            onPress={cancel}
          />
        </View>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <Text
            fontSize="h5"
            fontSpacing="medium"
            fontColor="white"
          >
            By entering the sweepstakes, I agree to the sweepstakes’ Official Rules. I also agree to receive email communication and special offers from The Dyrt and Renogy.
          </Text>
          <Text
            fontSize="h5"
            fontSpacing="medium"
            fontColor="white"
          >
            TERMS: NO PURCHASE NECESSARY. ELIGIBILITY: Must be eighteen (18) or older to win. This Giveaway is open only to individuals who are permanent legal residents of the 47 United States of America (excluding residents of Alaska, Hawaii, Rhode Island, overseas military installations, Puerto Rico, the District of Columbia, and other U.S. Territories). WINNER NOTIFICATION: Winner be will be chosen at random on the first day of each month in 2019. Winners will be notified via email. CONDITIONS: Prizes are non-transferable. No cash redemption or substitution will be allowed. By entering the sweepstakes, I agree to sign up to receive newsletters and special offers from The Dyrt and Renogy.
          </Text>
          <Text
            fontSize="h2"
            fontSpacing="large"
            fontWeight="semiBold"
            fontColor="white"
          >
            Official Rules (“Official Rules”)
          </Text>
          <Text
            fontSize="h5"
            fontSpacing="medium"
            fontWeight="semiBold"
            fontColor="white"
          >
            NO PURCHASE OR PAYMENT NECESSARY TO ENTER OR WIN. A PURCHASE OR PAYMENT OF ANY KIND WILL NOT INCREASE YOUR CHANCES OF WINNING.
          </Text>
          <Text
            fontSpacing="medium"
            fontSize="h5"
            fontColor="white"
          >
            By entering into this Sweepstakes, I accept the terms and conditions and set forth in these Official Rules. I confirm I am at least 18 years old and have reached the age of majority in my jurisdiction of residence at the time of opt-in (19 in Alabama and Nebraska; 21 in Mississippi). By entering the sweepstakes, I agree to sign up to receive newsletters and special offers from The Dyrt, Inc. and. RNG International Inc. (collectively, the “Associated Companies”). No Purchase Necessary. A Purchase Will Not Increase Your Chances of Winning. The Sweepstakes is subject to federal, state, municipal, and local laws and regulations and is void where prohibited. (New Jersey Notice: This Sweepstakes is not void in New Jersey).
          </Text>
          <Condition
            heading="Eligibility: $6,000 Solar Giveaway:"
            terms="(the “Sweepstakes”) is open to anyone who is at least eighteen (18) years of age and has reached the age of majority in their jurisdiction of residence at the time of opt-in (19 in Alabama and Nebraska; 21 in Mississippi) and lives within the continental United States and has a valid email address. Employees, independent contractors, interns, officers, directors, and agents of Sponsor and the associated companies are not eligible to enter."
          />
          <Condition
            heading="Sponsor:"
            terms="The Sweepstakes is sponsored by The Dyrt, Inc. at 220 NW 8th Ave, Portland, OR, 97209."
          />
          <Condition
            heading="Agreement to Official Rules:"
            terms="By entering the Sweepstakes, you indicate your full and unconditional agreement to, and acceptance of, (a) these Official Rules and (b) Sponsor’s decisions, which are final and binding. Winning a prize is contingent upon fulfilling all requirements set forth herein."
          />
          <Condition
            heading="Entry Period:"
            terms="The Sweepstakes begins at 12:00am EST on 01/01/2019 (“Entry Period”). Entries submitted before or after the Entry Period will not be eligible. Sponsor’s computer is the official timekeeping device for the Sweepstakes. The Sweepstakes will end on 12/31/2019 at 11:59pm EST."
          />
          <Condition
            heading="How to Enter:"
            terms="At the beginning of the Entry Period, you may enter the Sweepstakes by visiting the an official Renogy Booth at an RV trade show in 2019 (the “Sweepstakes Site”) and completing the Sweepstakes entry form. There is a limit of one (1) entry per person/email address. The use of an agency or any automated system to enter is strictly prohibited and Sponsor reserves the right to disqualify any entries received through such methods, as determined by Sponsor, in its sole discretion. By entering the Giveaway in accordance with the entry process described above, you will be registering to receive email communication from The Dyrt, Inc. and RNG International Inc. and agreeing that your registration and any other information collected in connection with the Sweepstakes may be used by the following partners: The Dyrt, Inc. in accordance with their Privacy Policy, a current copy of which can be found here https://thedyrt.com/about/privacy;RNG International Inc. in accordance with their Privacy Policy, a current copy of which can be found here https://www.renogy.com/privacy-policy/"
          />
          <Condition
            heading="Drawing:"
            terms=" On the first of each month in 2019, Sponsor will select 1 potential winner in a random drawing of all entries received. The odds of being selected depend on the number of entries received."
          />
          <Condition
            heading="Notification and Requirements of Potential Winners:"
            terms="Sponsor will attempt to notify potential winner within five (5) business days of the drawing by email. If a potential winner does not respond within seven (7) calendar days after the notice is sent, the Sponsor will select an alternate potential winner in his/her place at random from all remaining entries received. Only three (3) alternate potential winners will be contacted. Except where prohibited, a potential winner may be required to complete and return an affidavit of eligibility and liability/publicity release. If a potential winner fails to sign and return these documents within the required time period, an alternate potential winner may be selected in his/her place in a random drawing of all remaining entries received. Only three (3) alternate potential winners may be contacted."
          />
          <Condition
            heading="Prize(s):"
            terms=" One (1) grand prize will be awarded and one (1) winner will be chosen."
          />
          <Condition
            heading="Description of Prizes:"
            terms=" Grand Prize ($500 Renogy gift card)"
          />
          <Text
            fontSize="h5"
            fontSpacing="medium"
          >
            Enter for your chance to win a $500 Renogy gift card.
          </Text>
          <Condition
            heading="General Conditions:"
            terms="In the event that the operation, security, or administration of the Sweepstakes is impaired in any way for any reason, including, but not limited to fraud, virus, or other technical problem, Sponsor may, in its sole discretion, either: (a) suspend the Sweepstakes to address the impairment and then resume the Sweepstakes in a manner that best conforms to the spirit of these Official Rules; or (b) award the prize(s) at random from among the eligible entries received up to the time of the impairment. Sponsor reserves the right in its sole discretion to disqualify any individual it finds to be tampering with the entry process or the operation of the Sweepstakes or to be acting in violation of these Official Rules or in an unsportsmanlike or disruptive manner. Any attempt by any person to undermine the legitimate operation of the Sweepstakes may be a violation of criminal and civil law, and, should such an attempt be made, Sponsor reserves the right to seek damages from any such person to the fullest extent permitted by law. Failure by Sponsor to enforce any term of these Official Rules shall not constitute a waiver of that provision. Proof of sending any communication to Sponsor by mail shall not be deemed proof of receipt of that communication by Sponsor. In the event of a dispute as to any online entry, the authorized account holder of the email address used to enter will be deemed to be the participant. The “authorized account holder” is the natural person who is assigned to an email address by an Internet access provider, online service provider, or other organization responsible for assigning email addresses for the domain associated with the submitted email address."
          />
          <Condition
            heading="Release and Limitations of Liability:"
            terms="By participating in the Sweepstakes, you agree to release and hold harmless Sponsor, its parent, subsidiaries, affiliates, the prize providers and each of their respective officers, directors, employees, and agents (the “Released Parties”) from and against any claim or cause of action arising out of participation in the Sweepstakes or receipt or use of any prize, including, but not limited to: (a) unauthorized human intervention in the Sweepstakes; (b) technical errors related to computers, servers, providers, or telephone, or network lines; (c) printing errors; (d) lost, late, postage due, misdirected, or undeliverable mail; (e) errors in the administration of the Sweepstakes or the processing of entries; or (f) injury or damage to persons or property which may be caused, directly or indirectly, in whole or in part, from entrant’s participation in the Sweepstakes or receipt or use of any prize. You further agree that in any cause of action, the Released Parties’ liability will be limited to the cost of entering and participating in the Sweepstakes, and in no event shall the Released Parties be liable for attorney’s fees. You waive the right to claim any damages whatsoever, including, but not limited to, punitive, consequential, direct, or indirect damages."
          />
          <Condition
            heading="Privacy and Use of Information Submitted; Publicity:"
            terms="Any information you submit as part of the Sweepstakes will be used for purposes of this Sweepstakes and treated in accordance with Sponsor’s Privacy Policy as otherwise set forth in these Official Rules. Except where prohibited, participation in the Sweepstakes constitutes an entrant’s consent to Sponsor’s use of his/her name, likeness, voice, opinions, biographical information, and state of residence for promotional purposes in any media without further payment or consideration."
          />
          <Condition
            heading="Use of Entrant Information:"
            terms=" By entering the Sweepstakes, you acknowledge and agree that Sponsor and the participating companies The Dyrt, Inc. and RNG International Inc. will use Entrant’s information, including, without limitation, your e-mail address, for general solicitation, marketing, or other business or promotional activities in connection with the services and products provided by Sponsor or the participating companies. You may at any time revoke the use of such information by providing written notice to Sponsor and each other participating company using the following addresses or by responding to a marketing email using the unsubscribe link provided in the email. Please note that your opt-out preference will apply to marketing communication and may not apply to transactional communication including those associated with your entry."
          />
          <Condition
            heading="Disputes:"
            terms="Except where prohibited, you agree that any and all disputes, claims and causes of action arising out of, or connected with, the Sweepstakes or any prize awarded shall be resolved individually, without resort to any form of class action, and exclusively by the appropriate court located in Portland, OR. All issues and questions concerning the construction, validity, interpretation and enforceability of these Official Rules, your rights and obligations, or the rights and obligations of Sponsor in connection with the Sweepstakes, shall be governed by, and construed in accordance with, the laws of OR, without giving effect to any choice of law or conflict of law rules (whether of OR or any other jurisdiction), which would cause the application of the laws of any jurisdiction other than OR."
          />
          <Condition
            heading="Third Party Platforms:"
            terms="If this Sweepstakes is hosted, administered, or operated on a third party platform, including without limitation a social media platform (e.g. Facebook or Twitter) (“Third Party Platform”), then by participating in this Sweepstakes, entrants hereby release and agree to comply with all rules and policies set forth by such Third Party Platform and to hold harmless such Third Party Platform from any and all liability, loss or damages arising from or in connection with the awarding, receipt, and/or use or misuse of prizes or participation in any prize related activities. Unless otherwise stated to the contrary in these Official Rules, this Sweepstakes is not sponsored, endorsed or administered by, or associated with, any Third Party Platform."
          />
          <Condition
            heading="Results:"
            terms="To request a winners list, send a self addressed, stamped envelope to The Dyrt, Inc. at 220 NW 8th Ave, Portland, OR, 97209. Requests must be received within four (4) weeks of the end of the Entry Period."
          />
        </ScrollView>
      </View>
    );
  }
}
