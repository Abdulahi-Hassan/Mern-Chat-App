function GenderCheckbox({ OnCheckBoxChange, SelectedGender }) {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer `}>
          <span className="label-text ">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900 "
            checked={SelectedGender === "male"}
            onChange={() => OnCheckBoxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer `}>
          <span className="label-text ">Female</span>
          <input type="checkbox" className="checkbox border-slate-900 " 
             checked={SelectedGender === "female"}
             onChange={() => OnCheckBoxChange("female")}
          />
        </label>
      </div>
    </div>
  );
}

export default GenderCheckbox;
