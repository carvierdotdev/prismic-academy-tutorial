import { PrismicRichText } from "@prismicio/react";
/**
 * @typedef {import("@prismicio/client").Content.TextSliceSlice} TextSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextSliceSlice>} TextSliceProps
 * @param {TextSliceProps}
 */
const TextSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="py-24 gap-16 inline-flex flex-col items-center text-center w-screen bg-greenGrey">
        <div className="container gap-6 flex flex-col items-center">
          <PrismicRichText field={slice.primary.text_field} />
        </div>
      </div>
    </section>
  );
};

export default TextSlice;
