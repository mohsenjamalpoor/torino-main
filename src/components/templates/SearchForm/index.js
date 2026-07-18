"use client";

import { useForm } from "react-hook-form";
import QueryString from "qs";
import { useRouter } from "next/navigation";

import { flattenObject } from "@/core/utils/helpers";
import useQuery from "@/core/hooks/query";

import CitySelect from "./CitySelect";
import DateRangeField from "./DateRangeField";

function SearchForm() {
  const router = useRouter();
  const { getQuery, removeAllQuery } = useQuery();

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      originId: getQuery("originId") || "",
      destinationId: getQuery("destinationId") || "",
    },
  });

  const submitHandler = (form) => {
    const query = QueryString.stringify(flattenObject(form));
    router.push(`?${query}`);
  };

  const clearHandler = () => {
    reset({ originId: "", destinationId: "", date: undefined });
    removeAllQuery();
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex items-center gap-4 mt-5 border border-gray-300 m-auto px-10 py-1 rounded-lg w-fit"
    >
      <CitySelect control={control} name="originId" label="مبدا" />
      <div className="border-r h-12 border-[#00000033]"></div>
      <CitySelect control={control} name="destinationId" label="مقصد" />
      <div className="border-r h-12 border-[#00000033]"></div>
      <DateRangeField control={control} />

      <button
        type="submit"
        className="bg-green-500 rounded-md text-white px-2 py-1.5"
      >
        جستجو
      </button>
      <button
        type="button"
        onClick={clearHandler}
        aria-label="حذف فیلترها"
        className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 text-gray-400 hover:text-gray-600"
      >
        ✕
      </button>
    </form>
  );
}

export default SearchForm;
