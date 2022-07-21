import { useState, useEffect } from "react";

import { db } from "../firebase/firebase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  where,
  QuerySnapshot,
} from "firebase/firestore";

import { IDocument, IAction } from "../interfaces/IDataBase";

export const useFetchDocuments = (
  docCollection: string,
  search = null,
  uid = null
) => {
  const [documents, setDocuments] = useState<any>();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [cancelled, setCancelled] = useState<boolean>(false);

  useEffect(() => {
    async function loadData() {
      if (cancelled) return;

      setLoading(true);

      const collectionRef = await collection(db, docCollection);

      try {
        let queryGet;

        queryGet = await query(collectionRef, orderBy("created_at", "desc"));

        await onSnapshot(queryGet, (querySnapshot) => {
          setDocuments(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        });
        setLoading(false);
      } catch (error: any) {
        console.log(error.message);

        setLoading(false);
      }
    }
    loadData();
  }, [docCollection, search, uid, cancelled]);

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { documents, loading, error };
};
