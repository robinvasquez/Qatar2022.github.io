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
    titulo: "SEDE",
    src: "src/assets/QATAR-1.png",
    informacion:
      "La Copa Mundial de Fútbol de la FIFA Catar 2022 será la XXII edición de la Copa Mundial de Fútbol masculino organizada por la FIFA. Esta edición se realizará desde el 21 de noviembre al 18 de diciembre de 2022 en Catar, que consiguió los derechos de organización el 2 de diciembre de 2010. Catar hasta la actualidad confirmó ocho estadios en cinco ciudades para el mundial: AlWakrah, Doha, Rayán, Jory Lusail, todas ellas albergarán los 64 partidos de la Copa Mundial.",

    arrayPrincipal: [],
  }),
  computed: {},
  methods: {
    async ver() {
      var num = 0;
      this.arrayPrincipal = [];

      db.collection("Sede")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.arrayPrincipal[num] = {
              Continente: `${doc.data().Continente}`,
              Descripcion: `${doc.data().Descripcion}`,
              Habitantes: `${doc.data().Habitantes}`,
              Nombre: `${doc.data().Nombre}`,
            };
            num++;
          });
        });
    },
  },
};
