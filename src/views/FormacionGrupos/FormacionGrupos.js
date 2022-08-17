import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyB6cl1z33pKsWw0TZT8Joxuv2lN0sbVMXQ",
  authDomain: "fifa-qatar-5b86c.firebaseapp.com",
  projectId: "fifa-qatar-5b86c",
  storageBucket: "fifa-qatar-5b86c.appspot.com",
  messagingSenderId: "366211805794",
  appId: "1:366211805794:web:a863bc5d0f595465b0173b",
  measurementId: "G-3GNJERTV80",
};

const dbs = Firebase.initializeApp(config);
const db = dbs.firestore();
export default {
  async mounted() {
    await this.ver();
  },
  data: () => ({
    arrayGrupos: [],
  }),

  computed: {},

  methods: {
    async ver() {
      var num = 0;
      this.arrayGrupos = [];

      db.collection("Grupos")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.arrayGrupos[num] = {
              Grupo: `${doc.data().Grupo}`,
              Pais1: `${doc.data().Pais1}`,
              Pais2: `${doc.data().Pais2}`,
              Pais3: `${doc.data().Pais3}`,
              Pais4: `${doc.data().Pais4}`,
            };
            num++;
          });
        });
    },
  },
};
