const functions = require('firebase-functions');

const admin = require('firebase-admin');

const rp = require('request-promise');

// initializes your application
admin.initializeApp(functions.config().firebase);

exports.onUserAdded = functions.firestore
  .document('users/{userId}')
  .onCreate((snapshot, context) => {
    const user = snapshot.data();

    return Promise.all([
      addToMailingList(user),
      user.phoneNumber ? requestAppDownload(user) : Promise.resolve(),
    ]);
  });

const iterableUrl =  functions.config().iterable.url;

const apiKey = functions.config().iterable.key;

const listName = functions.config().iterable.list;

const platform = 'mobile';

const operatingSystem = 'iOs';

const iterableOptions = {
  method: 'POST',
  uri: `${iterableUrl}events/track?api_key=${apiKey}`,
  json: true,
}

function addToMailingList(user) {
    rp(
      Object.assign(
        {
          body: {
            email: user.email,
            eventName: 'mailingListSignup',
            dataFields: {
              listName,
              platform,
              operatingSystem,
            },
          },
        },
        iterableOptions
      )
    ).then((result) => {
      console.log(`Added ${user.email} to mailing list code: ${result.code}`);
      return true;
    })
    .catch((error) => {
      console.log(`Add to mailing list error: ${error.message}`);
    });
}

function requestAppDownload(user) {
  rp(
    Object.assign(
      {
        body: {
          email: user.email,
          eventName: 'requestAppDownloadLink',
          dataFields: {
            platform,
            operatingSystem,
            phoneNumber: user.phoneNumber,
            campaign: listName,
          },
        },
      },
      iterableOptions
    )
  ).then((result) => {
    console.log(`Request app download for ${user.email} code: ${result.code}`);
    console.log(result.code);
    return true;
  })
  .catch((error) => {
    console.log(`Request app dowload errorr: ${error.message}`);
  });
}