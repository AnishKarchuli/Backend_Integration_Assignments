import Hotels from './components/Hotels'
import HotelByName from './components/HotelByName'
import AddHotelForm from './components/AddHotelForm'

export default function App(){
  return (
    <>
      <AddHotelForm />
      <Hotels />
      <HotelByName name="Sunset Resort" />
    </>
  )
}