import Header from 'components/Header';
import styles from './Home.module.scss';
import relogio from 'assets/inicial.png';
import automotivoThumb from 'assets/categorias/thumbnail/automotivo.png';
import eletronicosThumb from 'assets/categorias/thumbnail/eletronicos.png';
import escritorioThumb from 'assets/categorias/thumbnail/escritorio.png';
import jogosThumb from 'assets/categorias/thumbnail/jogos.png';
import somThumb from 'assets/categorias/thumbnail/som.png';
import automotivoHeader from 'assets/categorias/header/automotivo.png';
import eletronicosHeader from 'assets/categorias/header/eletronicos.png';
import escritorioHeader from 'assets/categorias/header/escritorio.png';
import jogosHeader from 'assets/categorias/header/jogos.png';
import somHeader from 'assets/categorias/header/som.png';
import { useNavigate } from 'react-router-dom';

const categorias = [{
  nome: 'Eletrônicos',
  thumbnail: eletronicosThumb,
  header: eletronicosHeader,
  id: 'eletronicos',
  descricao: 'Os melhores e mais atuais dispositivos eletrônicos estão aqui!'
}, {
  nome: 'Automotivo',
  thumbnail: automotivoThumb,
  header: automotivoHeader,
  id: 'automotivos',
  descricao: 'Encontre aqui equipamentos para deixar seu carro com a sua cara!'
}, {
  nome: 'Jogos',
  thumbnail: jogosThumb,
  header: jogosHeader,
  id: 'jogos',
  descricao: 'Adquira os consoles e jogos mais atuais do mercado !'
}, {
  nome: 'Escritório',
  thumbnail: escritorioThumb,
  header: escritorioHeader,
  id: 'escritorio',
  descricao: 'Tudo para o que escritório ficar incrível!'
}, {
  nome: 'Som e imagem',
  thumbnail: somThumb,
  header: somHeader,
  id: 'som',
  descricao: 'Curta suas músicas e seus filmes com a melhor qualidade!'
}]

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Header
        titulo='Classificados Tech'
        descricao='Compre diversos tipos de produtos no melhor site do Brasil!'
        imagem={relogio}
        className={styles.header}
      />
      <div className={styles.categorias}>
        <div className={styles['categorias-title']}>
          <h1>
            Categorias
          </h1>
        </div>
        <div className={styles['categorias-container']}>
          {categorias.map((categoria, index) => (
            <div key={index} onClick={() => navigate(`/categoria/${categoria.id}`)}>
              <img src={categoria.thumbnail} alt={categoria.nome} />
              <h1>{categoria.nome}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}