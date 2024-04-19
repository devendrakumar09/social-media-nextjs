import Image from "next/image";
import PostUI2 from "../_components/post/PostUI2";
import PostUI from "../_components/post/PostUI";
import StoryBarUI from "../_components/storyBar/StoryBarUI";
import ProfileUI from "../_components/profile/ProfileUI";
import QuickProfile from "../_components/profile/QuickProfile";
import SuggestionProfile from "../_components/profile/suggestionProfile/SuggestionProfile";

export default function Home() {
  return (
    <>
      <div className="mx-auto grid max-w-4xl grid-cols-12 gap-4 p-1">
        <div className="header col-span-12 ">
          <StoryBarUI />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <PostUI2 />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <div className="my-5">
            <h2 className="text-lg font-semibold text-gray-900">Praoted</h2>
          </div>
          <QuickProfile />
          <QuickProfile />
          
        </div>
        <div className="col-span-12">
          <div className="px-4">
            <div className="my-5">
              <h2 className="text-lg font-semibold text-gray-900">Suggestion</h2>
            </div>
            <div className="grid sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-4">
              <SuggestionProfile />
              <SuggestionProfile />
              <SuggestionProfile />
              <SuggestionProfile />
            </div>
          </div>
        </div>

        <div className="col-span-12 sm:col-span-6">
          <PostUI2 />
        </div>
        <div className="col-span-12 sm:col-span-6">
        <PostUI2 />
        </div>
      </div>

    </>
  );
}
