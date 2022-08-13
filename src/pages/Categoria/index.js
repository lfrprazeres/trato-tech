import Header from 'components/Header';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function Categoria() {
  const { nomeCategoria } = useParams();
  const categoria = useSelector(state => state.categorias.find(categoria => categoria.id === nomeCategoria));
  return (
    <div>
      <Header
        titulo={categoria.nome}
        descricao={categoria.descricao}
        imagem={categoria.header}
      />
    </div>
  )
}