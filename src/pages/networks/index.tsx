import { FormEvent, useState } from "react";
import Header from "../../components/Header";
import Input from "../../components/Input";

import { db } from "../../services/firebaseConnection";
import {doc,setDoc,addDoc,getDoc } from "firebase/firestore";

const Networks = () => {
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");

  const handleRegister = (e:FormEvent) => {
    e.preventDefault()
    setDoc(doc(db, "social","link"), {
      facebook: facebook,
      instagram: instagram,
      youtube: youtube
    })
    .then(()=> {
      console.log("cadastrado com sucesso")
    })
    .catch((error)=> {
      console.log("erro ao salvar", error)
    })
  }


  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2">
      <Header />

      <h1 className="text-white text-2xl font-medium mt-8 mb-4">
        Minhas redes sociais
      </h1>

      <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegister}>
        <label className="text-white font-medium mt-2 mb-2">
          Link do facebook
        </label>
        <Input
          placeholder="Digite a url do facebook..."
          type="url"
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
        />
        <label className="text-white font-medium mt-2 mb-2">
          Link do instagram
        </label>
        <Input
          placeholder="Digite a url do instagram..."
          type="url"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />
        <label className="text-white font-medium mt-2 mb-2">
          Link do youtube
        </label>
        <Input
          placeholder="Digite a url do youtube..."
          type="url"
          value={youtube}
          onChange={(e) => setYoutube(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mt-2 font-medium"
        >
          Salvar Links
        </button>
      </form>
    </div>
  );
};

export default Networks;
