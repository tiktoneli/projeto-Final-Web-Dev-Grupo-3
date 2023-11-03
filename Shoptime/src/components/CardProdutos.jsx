import { useEffect, useState } from "react";
import { api } from "../api/api";
import { Link } from "react-router-dom";

const CardProdutos = ({ id, nome, descricao, getProdutos, favoritos, imgurl }) => {

    const handleLike = () => {
      api.patch(`/produtos/${id}`, { favoritos: favoritos + 1 })
      getProdutos()
    }
    
    const handleRemover = () => {
        api.delete(`/posts/${id}`)
        getProdutos()
      }

    return (
        <div style={{ borderWidth: '1px', borderColor: 'gray', border: 'solid', borderRadius: '10px', marginTop: '10px' }}>
          <b >{nome}</b>
          <p>{descricao}</p>
          <img style={{maxHeight:'100px', float:''}} src={imgurl} alt="" />
          <div><button onClick={handleLike}>Favoritos: {favoritos}</button>
          </div>
          <br />
          <div><Link to={`/produto/${id}`}>Ver mais</Link></div>
        </div>
      )
}

export default CardProdutos