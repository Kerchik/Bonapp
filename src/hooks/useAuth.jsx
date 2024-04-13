import { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { getUserRole } from '../requests/firebaseRequests'
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/authSlice';

export function useAuth() {
  const [isAuthChecked, setIsAuthChecked] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const role = await getUserRole(user.uid)
        dispatch(setUser({ ...user, role }))
      } else {
        dispatch(setUser(null))
      }

      setIsAuthChecked(true)
    })
    return unsubscribe;
  }, [])

  return isAuthChecked
}
