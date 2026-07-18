import { Controller } from "react-hook-form";
import { DatePicker } from "zaman";

function DateRangeField({ control, name = "date" }) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange } }) => (
        <DatePicker
          onChange={(e) => onChange({ startDate: e.from, endDate: e.to })}
          range
          round="x2"
          accentColor="#28a745"
          position="center"
          inputClass="bg-gray-100 w-20"
        />
      )}
    />
  );
}

export default DateRangeField;
