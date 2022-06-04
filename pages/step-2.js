import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import InputMask from "react-input-mask";
import Link from "next/link";

const creditTypes = [
  { id: 1, name: "Автокредит" },
  { id: 2, name: "Микрозайм" },
  { id: 3, name: "Ипотечный кредит" },
  { id: 4, name: "Потребительский кредит" },
];

const creditDurations = [
  { id: 1, name: "3 месяца" },
  { id: 2, name: "6 месяцев" },
  { id: 3, name: "1 год" },
  { id: 4, name: "3 года" },
  { id: 5, name: "5 лет" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Step2() {
  const [selectedCreditType, setSelectedCreditType] = useState(creditTypes[3]);
  const [selectedCreditDuration, setSelectedCreditDuration] = useState(
    creditDurations[0]
  );
  const [creditSum, setCreditSum] = useState("");

  return (
    <>
      <div className="bg-gray-300">
        <div className="shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 bg-white px-8 py-6 border rounded-md">
          <h1 className="text-2xl font-semibold">Параметры кредита</h1>
          <div className="py-3">
            <Listbox
              value={selectedCreditType}
              onChange={setSelectedCreditType}
            >
              {({ open }) => (
                <>
                  <Listbox.Label className="block text-sm font-medium text-gray-700">
                    Тип кредита
                  </Listbox.Label>
                  <div className="mt-1 relative">
                    <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm">
                      <span className="block truncate">
                        {selectedCreditType.name}
                      </span>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <SelectorIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options
                        static
                        className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                      >
                        {creditTypes.map((person) => (
                          <Listbox.Option
                            key={person.id}
                            className={({ active }) =>
                              classNames(
                                active
                                  ? "text-white bg-red-600"
                                  : "text-gray-900",
                                "cursor-default select-none relative py-2 pl-3 pr-9"
                              )
                            }
                            value={person}
                          >
                            {({ selected, active }) => (
                              <>
                                <span
                                  className={classNames(
                                    selected ? "font-semibold" : "font-normal",
                                    "block truncate"
                                  )}
                                >
                                  {person.name}
                                </span>

                                {selected ? (
                                  <span
                                    className={classNames(
                                      active ? "text-white" : "text-red-600",
                                      "absolute inset-y-0 right-0 flex items-center pr-4"
                                    )}
                                  >
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
          </div>
          <div className="py-3">
            <Listbox
              value={selectedCreditDuration}
              onChange={setSelectedCreditDuration}
            >
              {({ open }) => (
                <>
                  <Listbox.Label className="block text-sm font-medium text-gray-700">
                    Срок кредита
                  </Listbox.Label>
                  <div className="mt-1 relative">
                    <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm">
                      <span className="block truncate">
                        {selectedCreditDuration.name}
                      </span>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <SelectorIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options
                        static
                        className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                      >
                        {creditTypes.map((person) => (
                          <Listbox.Option
                            key={person.id}
                            className={({ active }) =>
                              classNames(
                                active
                                  ? "text-white bg-red-600"
                                  : "text-gray-900",
                                "cursor-default select-none relative py-2 pl-3 pr-9"
                              )
                            }
                            value={person}
                          >
                            {({ selected, active }) => (
                              <>
                                <span
                                  className={classNames(
                                    selected ? "font-semibold" : "font-normal",
                                    "block truncate"
                                  )}
                                >
                                  {person.name}
                                </span>

                                {selected ? (
                                  <span
                                    className={classNames(
                                      active ? "text-white" : "text-red-600",
                                      "absolute inset-y-0 right-0 flex items-center pr-4"
                                    )}
                                  >
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
          </div>
          <div className="py-3">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="creditSum"
            >
              Сумма кредита
            </label>
            <input
              type="text"
              id="creditSum"
              name="creditSum"
              value={creditSum}
              onChange={(e) => {
                setCreditSum(e.target.value);
              }}
              placeholder="10 000 000"
              className="shadow-sm focus:ring-red-500 fucus:outline-none focus-visible:border-red-500  focus:border-red-500  w-full sm:text-sm border-gray-300 rounded-md py-2 px-3"
            />
          </div>
          <div className="text-center py-4">
            <Link href="/step-3">
              <a className="inline-block py-4 px-8 rounded-sm bg-red-800 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 mx-auto">
                Продолжить
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
