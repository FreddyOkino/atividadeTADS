import './App.css';
import React, {useState, useEffect} from 'react';
import {ProcessarDadosDasEstrlas} from './Utils/DadosPocessados';
import { popularesUsuarios, primeirosUsuarios, recentesUsuarios } from './Utils/DestaqueDados';
import dados from './Data/thefuck-sample-full.json'
import Cabecalho from './Components/CabecalhoComponente/cabecalhoComponente';
import Categoria from './Components/CategoriaComponente/CategoriaComponente'
import logo1 from './account-check-outline.svg'
import logo2 from './heart-outline.svg'
import logo3 from './history.svg'
import {  Chart as ChartJS,  CategoryScale,  LinearScale,  PointElement,  LineElement,  Title,  Tooltip,  Legend,} from 'chart.js';
import Grafico from './Components/GraficoComponente/GraficoCOmponente';
import FilterComponent from './Components/FiltroComponente/FiltroComponente';

ChartJS.register(  CategoryScale,  LinearScale,  PointElement,  LineElement,  Title,  Tooltip,  Legend);

function App() {

  const getprimeirosUsuarios = primeirosUsuarios(dados);
  const getrecentesUsuarios = recentesUsuarios(dados);
  const getpopularesUsuarios = popularesUsuarios(dados);
  const [grouping, setGrouping] = useState('month');
  const [type, setType] = useState('absolute');
  const [period, setPeriod] = useState('all')
  const [DadosPocessados, setdadosProcessados] =useState({});
  
  useEffect(() => {
    const groupedData = ProcessarDadosDasEstrlas(dados, grouping, type, period);
    setdadosProcessados(groupedData);
  }, [grouping, type, period]);
  
  return (

    <div className='App'>

      <Cabecalho title="nvbn/thefuck" />

      <div className="container">
        <Grafico DadosProcessados={DadosPocessados} />
        <FilterComponent grouping={grouping}
          setGrouping={setGrouping}
          type={type}
          setType={setType}
          period={period}
          setPeriod={setPeriod} />
      </div>


      <div className='dados'>
        <Categoria  title = "Primeiros" users ={getprimeirosUsuarios} logo={logo2}/>
        <Categoria  title = "Últimos" users ={getrecentesUsuarios} logo={logo3}/>
        <Categoria title = "Populares" users = {getpopularesUsuarios} logo={logo1}/>
      </div>

    </div>
  );
}

export default App;
