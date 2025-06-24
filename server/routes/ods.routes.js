import { Router } from 'express';
const router = Router();


router.get('/', (_, res) => {
  const ods = [
    {
      desc: 'Erradicar la pobreza en todas sus formas y en todo el mundo.',
      imagen: 'https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2019/09/S_SDG_Icons_Inverted_Transparent_WEB-01.png'
    },
    {
      desc: 'Poner fin al hambre, lograr la seguridad alimentaria y mejorar la nutrición.',
      imagen: 'https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2019/09/S_SDG_Icons_Inverted_Transparent_WEB-02.png'
    },
    {
      desc: 'Garantizar una vida sana y promover el bienestar para todos en todas las edades.',
      imagen: 'https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2019/09/S_SDG_Icons_Inverted_Transparent_WEB-03.png'
    },
    {
      desc: 'Garantizar una educación inclusiva, equitativa y de calidad.',
      imagen: 'https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2019/09/S_SDG_Icons_Inverted_Transparent_WEB-04.png'
    },
    {
      desc: 'Lograr la igualdad entre los géneros y empoderar a todas las mujeres y niñas.',
      imagen: 'https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2019/09/S_SDG_Icons_Inverted_Transparent_WEB-05.png'
    },
    {
      desc: 'Garantizar la disponibilidad de agua y su gestión sostenible.',
      imagen: 'https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2019/09/S_SDG_Icons_Inverted_Transparent_WEB-06.png'
    },
    {
      desc: 'Asegurar el acceso a energías asequibles, fiables, sostenibles y modernas.',
      imagen: 'https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2019/09/S_SDG_Icons_Inverted_Transparent_WEB-07.png'
    },
    {
      desc: 'Promover el crecimiento económico sostenido, inclusivo y sostenible.',
      imagen: 'https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2019/09/S_SDG_Icons_Inverted_Transparent_WEB-08.png'
    },
    {
      desc: 'Construir infraestructuras resilientes y fomentar la innovación.',
      imagen: 'https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2019/09/S_SDG_Icons_Inverted_Transparent_WEB-09.png'
    },
    {
      desc: 'Reducir la desigualdad en y entre los países.',
      imagen: 'https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2019/09/S_SDG_Icons_Inverted_Transparent_WEB-10.png'
    },
    {
      desc: 'Lograr que las ciudades sean inclusivas, seguras, resilientes y sostenibles.',
      imagen: 'https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2019/09/S_SDG_Icons_Inverted_Transparent_WEB-11.png'
    },
    {
      desc: 'Asegurar modalidades de consumo y producción sostenibles.',
      imagen: 'https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2019/09/S_SDG_Icons_Inverted_Transparent_WEB-12.png'
    },
    {
      desc: 'Adoptar medidas urgentes contra el cambio climático y sus efectos.',
      imagen: 'https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2019/09/S_SDG_Icons_Inverted_Transparent_WEB-13.png'
    },
    {
      desc: 'Conservar y utilizar de forma sostenible los océanos y los recursos marinos.',
      imagen: 'https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2019/09/S_SDG_Icons_Inverted_Transparent_WEB-14.png'
    },
    {
      desc: 'Gestionar sosteniblemente los bosques y detener la pérdida de biodiversidad.',
      imagen: 'https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2019/09/S_SDG_Icons_Inverted_Transparent_WEB-15.png'
    },
    {
      desc: 'Promover sociedades pacíficas e inclusivas y garantizar el acceso a la justicia.',
      imagen: 'https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2019/09/S_SDG_Icons_Inverted_Transparent_WEB-16.png'
    },
    {
      desc: 'Revitalizar la alianza mundial para el desarrollo sostenible.',
      imagen: 'https://aulas2030.net/wp-content/uploads/2021/02/S_SDG_inverted_WEB-17.png'
    }
  ];
  res.json(ods);
});

export default router;
