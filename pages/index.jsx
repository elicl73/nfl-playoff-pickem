import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <div className="m-4">
      <p>
        Quiniela entre amigos para los playoff de la NFL, el costo de la entrada
        es de $500.00 pesos, los equipos los escoge el sistema de manera
        aleatoria; el usuario que tenga el equipo ganador del Super Bowl se
        llevara el dinero acumulado.
      </p>
      <button
        type="button"
        onClick={() => router.push('/pickem')}
        className="mt-6 mx-auto text-center mr-3 font-medium rounded-lg text-sm px-5 py-2.5 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
      >
        Acepto
      </button>
    </div>
  )
}
