const { Firestore } = require('@google-cloud/firestore');

async function postPredict(id, data) {
    const db = new Firestore();
    const predictCollection = db.collection('prediction').doc(id).set(data);
    return predictCollection;
}

async function getPredictHistory() {
    const db = new Firestore();
    const predictCollection = db.collection('prediction');
    const response = await predictCollection.get();
    let responArr = [];
    
        response.forEach(doc => {
        responArr.push({ id: doc.data().id, history: doc.data() });
});
    return responArr;
}

module.exports = {
    postPredict,
    getPredictHistory
};
