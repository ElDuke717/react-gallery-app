import * as React from "react"

function DogPaw(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      viewBox="0 0 375 375"
      height={props.height}
      {...props}
    >
      <defs>
        <clipPath id="prefix__a">
          <path d="M74 159h226v183.598H74zm0 0" />
        </clipPath>
        <clipPath id="prefix__b">
          <path d="M102 32.098h79V134h-79zm0 0" />
        </clipPath>
        <clipPath id="prefix__c">
          <path d="M193 32.098h79V134h-79zm0 0" />
        </clipPath>
      </defs>
      <g clipPath="url(#prefix__a)">
        <path
          d="M250.207 217.023c-21.328-24.265-30.383-57.207-63.406-57.207-33.024 0-42.082 32.942-63.406 57.207-19.079 21.707-49.141 31.813-49.141 61.942 0 35.148 28.535 63.637 63.73 63.637 19.602 0 30.637-22.739 48.817-22.739 18.176 0 29.215 22.739 48.812 22.739 35.2 0 63.73-28.489 63.73-63.637 0-30.13-30.058-40.235-49.136-61.942"
          fill={props.fill}
        />
      </g>
      <g clipPath="url(#prefix__b)">
        <path
          d="M180.02 82.64c0 27.915-17.403 50.547-38.872 50.547-21.464 0-38.87-22.632-38.87-50.546 0-27.918 17.406-50.547 38.87-50.547 21.47 0 38.872 22.629 38.872 50.547"
          fill={props.fill}
        />
      </g>
      <g clipPath="url(#prefix__c)">
        <path
          d="M271.316 82.64c0 27.915-17.398 50.547-38.867 50.547-21.469 0-38.87-22.632-38.87-50.546 0-27.918 17.401-50.547 38.87-50.547 21.469 0 38.867 22.629 38.867 50.547"
          fill={props.fill}
        />
      </g>
      <path
        d="M106.82 155.273c5.27 27.418-7.547 52.918-28.632 56.961-21.083 4.04-42.446-14.91-47.715-42.328-5.27-27.414 7.547-52.914 28.629-56.957 21.082-4.043 42.445 14.906 47.718 42.324M340.46 176.61c-9.495 26.257-33.565 41.64-53.753 34.355-20.195-7.278-28.86-34.469-19.363-60.723 9.5-26.254 33.562-41.637 53.758-34.36 20.187 7.282 28.855 34.477 19.359 60.727"
        fill={props.fill}
      />
    </svg>
  )
}

export default DogPaw