/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
export default function Step1() {
  return (
    <>
      <div className="bg-gray-300">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-8 py-6 border rounded-md">
          <h1 className="text-2xl font-semibold">Идентификация через OneID</h1>
          <div className="text-center my-6 mx-auto">
            <img
              src="/oneID.png"
              alt="One ID"
              className="mx-auto text-center"
            />
          </div>
          <div className="text-center py-4">
            <Link href="/step-2">
              <a className="inline-block py-4 px-8  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 mx-auto">
                Идентификация через OneID
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
