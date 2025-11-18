let inputConfig = input.config();
let recordId = inputConfig.recordId;
let figmaNodeId = inputConfig.figmaNodeId;
let figmaFileKey = inputConfig.figmaFileKey;
let figmaName = inputConfig.figmaName;
let googleDriveFileId = inputConfig.googleDriveFileId;

let webhookUrl = '[ENTER MAKE WEBHOOK URL]';
let jsonBody = {
    recordId: recordId,
    figmaNodeId: figmaNodeId,
    figmaFileKey: figmaFileKey,
    figmaName: figmaName
}

if (googleDriveFileId){
    jsonBody['googleDriveFileId'] = googleDriveFileId
}

let response = await fetch(webhookUrl, {
    method: 'POST',
    body: JSON.stringify(jsonBody),
    headers: {
        'Content-Type': 'application/json',
    },  
});
console.log(await response);