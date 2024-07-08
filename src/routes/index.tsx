import {component$, QwikIntrinsicElements} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export function SkillIconsInstagram(props: QwikIntrinsicElements['svg'], key: string) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props} key={key}>
      <defs>
        <linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#833AB4', stopOpacity: 1}}/>
          <stop offset="50%" style={{stopColor: '#FD1D1D', stopOpacity: 1}}/>
          <stop offset="100%" style={{stopColor: '#FDBE3B', stopOpacity: 1}}/>
        </linearGradient>
      </defs>
      <path fill="url(#instagramGradient)"
            d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path>
    </svg>
  )
}


export function IcOutlineMail(props: QwikIntrinsicElements['svg'], key: string) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props} key={key}><path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 4.99L4 6zm0 12H4V8l8 5l8-5z"></path></svg>
  )
}

export default component$(() => {
  return (
    <main class="w-full h-full">
      <div id="background" class="absolute w-full h-full lg:w-1/2 lg:ml-[50%] bg-demi bg-center bg-cover z-0"/>
      <div id="content" class="absolute w-full h-full lg:w-1/2 lg:bg-pink-600 z-1 flex flex-col justify-center content-center text-center items-center gap-4">
        <div
          id="instagram"
          onClick$={() => window.open('https://instagram.com/demiii_i', '_blank')}
          class="bg-white bg-opacity-90 p-4 rounded-lg shadow-lg w-[90%] flex cursor-pointer">
          <SkillIconsInstagram class="w-12 h-12" key="icon"/>
          <span class="text-2xl flex-1 text-center pt-2 text-gray-700">Instagram</span>
        </div>
        <div
          id="contact"
          class="bg-white bg-opacity-90 p-4 rounded-lg shadow-lg w-[90%] flex cursor-pointer"
          onClick$={() => window.location.href = 'mailto:demi@demiiii.com'}
        >
          <IcOutlineMail class="w-12 h-12" key="icon"/>
          <span class="text-2xl flex-1 text-center pt-2 text-gray-700">Contacto</span>
        </div>
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
