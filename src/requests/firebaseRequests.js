import firebaseApp from '../firebase/firebase'
import { getDatabase, ref, set, push, get, onValue } from 'firebase/database'

const TABLE_NAME_MENU_ITEMS = 'menuItems'
const TABLE_NAME_USERS = 'users'
const TABLE_NAME_ORDERS = 'orders'

export const ORDER_UNPAID_STATUS = '0'
export const ORDER_PENDING_STATUS = '1'
export const ORDER_FINISHED_STATUS = '2'

const setupDbForGetAndPut = (tableName) => {
    const db = getDatabase(firebaseApp)
    return ref(db, tableName)
}

const setupDbForPost = (tableName) => {
    const db = getDatabase(firebaseApp)
    return push(ref(db, tableName))
}

export const transformResponseToArray = (requestObject) => {
    return Object.keys(requestObject).map((id) => {
      const item = requestObject[id]
      item.id = id
      return item
    })
}

export const getMenuItems = async () => {
    const dbRef = setupDbForGetAndPut(TABLE_NAME_MENU_ITEMS)
    const snapshot = await get(dbRef)

    if (snapshot.exists()) {
      return snapshot.val()
    } else {
      console.error('something')
    }
}

export const getOrderItems = async (callback, statuses = []) => {
    const dbRef = setupDbForGetAndPut(TABLE_NAME_ORDERS)
    onValue(dbRef, async (snapshot) => {
      if (snapshot.exists()) {
        const orderItemsArray = transformResponseToArray(snapshot.val())
        const filteredOrderItems = orderItemsArray.filter(item => statuses.includes(item.status))
        const menuItems = await getMenuItems()
        const menuItemsArray = transformResponseToArray(menuItems)


        callback(filteredOrderItems.map((orderItem) => {
          const menuItem = menuItemsArray.find(menuItem => menuItem.id === orderItem.menuItemId)
          const { id: menuItemId, ...rest } = menuItem

          return {
            ...orderItem,
            ...rest,
            menuItemId: menuItemId
          }
        }))
      }  
    })
}

export const getUserRole = async (uid) => {
  const dbRef = setupDbForGetAndPut(TABLE_NAME_USERS)

  const snapshot = await get(dbRef)
    if (snapshot.exists()) {
      const user = Object.values(snapshot.val()).find(user => user.uid === uid)

      if (user) {
        return user.role
      }

    } else {
      console.error('something')
    }
}

export const orderFood = async (menuItemId) => {
    return new Promise((resolve, reject) => {
      const dbRef = setupDbForPost(TABLE_NAME_ORDERS)

      set(dbRef, {
        menuItemId: menuItemId,
        status: ORDER_UNPAID_STATUS
      })

      resolve()
    })
}

export const payOrFinishOrder = async (orderId, menuItemId, status) => {
  return new Promise((resolve, reject) => {
    const dbRef = setupDbForGetAndPut(`${TABLE_NAME_ORDERS}/${orderId}`)
  
    set(dbRef, {
      status: status,
      menuItemId: menuItemId
    })

    resolve()
  })
}