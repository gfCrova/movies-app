import { MovieGridBase } from '../../components/Movie/MovieGridBase/MovieGridBase'

export const Upcoming = () => {
  return (
    <div>
        <h1 className="text-light text-center py-5">Upcoming: </h1>
        <MovieGridBase upcoming={true}/>
    </div>
  )
}
