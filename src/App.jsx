import './App.css'
import ColorCardPaletteList from './Components/ColorCardPaletteList/ColorCardPaletteList'

function App() {

  return (
    <div className='div-app'>
      <ColorCardPaletteList colors={[
        {likes: 10, time: '2 days', colors: ['#1B3C53', '#456882','#D2C1B6', '#F9F3EF']}, 
        {likes: 9, time: '14 minutes', colors: ['#748873', '#D1A980','#E5E0D8', '#F8F8F8']}, 
        {likes: 15, time: '5 hours', colors: ['#5EABD6', '#FEFBC7','#FFB4B4', '#E14434']}, 
        ]}/>
    </div>
  )
}

export default App
