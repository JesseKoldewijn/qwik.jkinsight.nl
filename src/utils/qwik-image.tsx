import { $, component$ } from "@builder.io/qwik"
import type { ImageTransformerProps } from "qwik-image"
import { Image, useImageProvider } from "qwik-image"

export default component$(
  (props: {
    src: string
    alt: string
    res?: number
    width?: number
    height?: number
    class?: string
  }) => {
    const imageTransformer$ = $(
      ({ src, width, height }: ImageTransformerProps): string => {
        // Here you can set your favourite image loaders service
        if (src.includes("data:image/")) {
          return `${src}`
        } else {
          return `${src}?height=${height}&width=${width}}&format=webp&fit=fill`
        }
      }
    )

    useImageProvider({
      // You can set this prop to overwrite default values [3840, 1920, 1280, 960, 640]
      resolutions: [props.res ? props.res : 640],
      imageTransformer$,
    })

    return (
      <Image
        class={props.class ? props.class : ""}
        layout="constrained"
        objectFit="fill"
        width={props.width ? props.width : 400}
        height={props.height ? props.height : 500}
        alt={props.alt}
        src={props.src}
      />
    )
  }
)
