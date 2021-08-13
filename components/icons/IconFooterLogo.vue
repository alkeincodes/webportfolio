<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="297" height="77.194" viewBox="0 0 297 77.194">
    <defs>
      <filter id="alkein" x="0" y="12.941" width="114" height="62" filterUnits="userSpaceOnUse">
        <feOffset dy="3" input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feFlood flood-opacity="0.161"/>
        <feComposite operator="in" in2="blur"/>
        <feComposite in="SourceGraphic"/>
      </filter>
      <filter id="villajos" x="168" y="12.941" width="129" height="62" filterUnits="userSpaceOnUse">
        <feOffset dy="3" input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="3" result="blur-2"/>
        <feFlood flood-opacity="0.161"/>
        <feComposite operator="in" in2="blur-2"/>
        <feComposite in="SourceGraphic"/>
      </filter>
    </defs>
    <g id="Group_616" data-name="Group 616" transform="translate(-818 -4812.059)">
      <g transform="matrix(1, 0, 0, 1, 818, 4812.06)" filter="url(#alkein)">
        <text id="alkein-2" data-name="alkein" transform="translate(9 51.94)" fill="#fff" font-size="31" font-family="Poppins-SemiBold, Poppins" font-weight="600"><tspan x="0" y="0">alkein</tspan></text>
      </g>
      <g transform="matrix(1, 0, 0, 1, 818, 4812.06)" filter="url(#villajos)">
        <text id="villajos-2" data-name="villajos" transform="translate(177 51.94)" fill="#fff" font-size="31" font-family="Poppins-SemiBold, Poppins" font-weight="600"><tspan x="0" y="0">villajos</tspan></text>
      </g>
      <g id="AV-Logo" transform="translate(923.82 4812.059)">
        <g id="Group_3" data-name="Group 3" transform="translate(0 0)">
          <g id="Group_1" data-name="Group 1" transform="translate(0 0)">
            <path id="Path_1" data-name="Path 1" d="M67.122,20.7,94.737,88.439l27.4-67.736h8.045L98,97.9H91.367L59.184,20.7Z" transform="translate(-59.184 -20.703)" fill="#fff"/>
          </g>
          <g id="Group_2" data-name="Group 2" transform="translate(0 0.024)">
            <path id="Path_2" data-name="Path 2" d="M59.184,586.042h8.045l10.14-25.063-3.831-9.353Z" transform="translate(-59.184 -508.895)" fill="#fff"/>
            <path id="Path_3" data-name="Path 3" d="M342.8,21h-6.632L325.422,46.755l3.725,9.1,10.279-25.43,10.2,25.005,3.73-9.12Z" transform="translate(-303.982 -21)" fill="#fff"/>
            <path id="Path_4" data-name="Path 4" d="M731.335,581.189,716.8,546.348l-3.811,9.315L723.4,581.189Z" transform="translate(-660.338 -504.042)" fill="#fff"/>
          </g>
          <path id="Path_5" data-name="Path 5" d="M371.417,386.879h20.5V381H371.84Z" transform="translate(-346.273 -351.986)" fill="#fff"/>
        </g>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconFooterLogo'
}
</script>
