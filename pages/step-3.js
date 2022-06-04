import Link from "next/link";

export default function Step3() {
  return (
    <>
      <div className="bg-gray-300 w-full h-screen pt-12">
        <div className="bg-white mx-auto w-1/2 px-8 py-6">
          <div className="mb-4 px-4 py-2">
            <h3 className="text-lg mb-2 flex justify-between">
              <span>Имя и Фамилия:</span>
              <span className="font-semibold">Sergio Marquina</span>
            </h3>
          </div>
          <div className="mb-4 px-4 py-2">
            <h3 className="text-lg mb-2 flex justify-between">
              <span>Среднемесячный доход:</span>
              <span className="font-semibold">6 000 000 UZS</span>
            </h3>
          </div>
          <div className="mb-4 px-4 py-2">
            <h3 className="text-lg mb-2 flex justify-between">
              <span>Уровень долговой нагрузки:</span>
              <span className="font-semibold text-green-600">6 %</span>
            </h3>
          </div>
          <div className="mb-4 px-4 py-2">
            <h3 className="text-lg mb-2 flex justify-between">
              <span>
                Уровень долговой нагрузки с учетом запрашиваемого кредита:
              </span>
              <span className="font-semibold text-red-600">32 %</span>
            </h3>
          </div>
          <div className="mb-4 px-4 py-2">
            <h3 className="text-lg mb-2 flex justify-between">
              <span>Кредитный скоринг:</span>
              <span className="font-semibold">
                <span className="text-green-600">375</span> (C1)
              </span>
            </h3>
            <div className="h-4 bg-gradient-to-r from-red-600 via-yellow-400 to-green-400 overflow-hidden relative">
              <span className="transform translate-x-3/4 absolute left-3/4 w-2 h-4 bg-black block"></span>
            </div>
            <div className="flex justify-between relative">
              <span>0</span>
              <span>500</span>
              <span className="absolute left-3/4">375</span>
            </div>
          </div>
          <div className="mb-4 px-4 py-2">
            <h3 className="text-lg mb-2 flex justify-between">
              <span>Предложенные кредиты:</span>
              <span className="font-semibold">18</span>
            </h3>
            <div className="flex justify-between">
              <h3 className="text-lg mb-2 flex w-1/2 gap-4">
                <span>Подходящих кредиты:</span>
                <span className="font-semibold">3</span>
              </h3>
              <h3 className="text-lg mb-2 flex w-1/2 gap-4">
                <span>Не подходит:</span>
                <span className="font-semibold">12</span>
              </h3>
            </div>
          </div>
          <div className="mb-4 px-4 py-2 flex gap-4 justify-center">
            <Link href="step-4">
              <a className="inline-block py-4 px-8 rounded-sm bg-green-800 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 mx-auto">
                Посмотреть подходящих кредитов
              </a>
            </Link>
            <Link href="step-5">
              <a className="inline-block py-4 px-8 rounded-sm bg-red-800 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 mx-auto">
                Посмотреть неподходящих кредитов
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
