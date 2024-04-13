kitchen@kitchen.com kitchen
waiter@waiter.com waiter
user@user.com useruser

My firebase data loooks like this:
"users": {
"-NvB*L84e8eNB3JbSnT*": {
"role": "0",
"uid": "4QPdu3ALD1WnIqrgHG546cBjvD72"
    },
"-NvB_VTSNitvxwL3U42l": {
"role": "1",
"uid": "0l0ixLcCWUdeLTfYuNIY55kNSuA2"
    },
"-NvB_bino6MIv2tvT6QV": {
"role": "2",
"uid": "J4tZMdY6lNZEUFA1Oa1DYLBi5nq1"
    }
  }
I managed to get all users data with:

const db = getDatabase(firebaseApp)
const dbRef =ref(db, 'users')
const snapshot = await get(dbRef)

But now i need to get one user data by uid, and I have no idea how to achieve it. The only way how i achieved it was:
const db = getDatabase(firebaseApp)
const dbRef =ref(db, 'users/-NvB_bino6MIv2tvT6QV')
const snapshot = await get(dbRef)
But this is bad example, because i only know uid, instead of users key. I am new to Firebase, so I would appreciate any help.

P.S. I am using react and firebase library
