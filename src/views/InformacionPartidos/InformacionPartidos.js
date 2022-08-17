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
    arrayPartidos: [],
  }),

  computed: {},

  methods: {
    async ver() {
      var num = 0;
      this.arrayPartidos = [];

      db.collection("Qatar2022")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.arrayPartidos[num] = {
              Fecha: `${doc.data().Fecha}`,
              Grupo: `${doc.data().Grupo}`,
              Jornada: `${doc.data().Jornada}`,
              Localidad: `${doc.data().Localidad}`,
              Partido: `${doc.data().Partido}`,
            };
            num++;
          });
        });
    },
  },
};
