import BaseBlockContent from "@sanity/block-content-to-react"
import React from "react"
import styled from "styled-components"

// import typography from './typography.module.css'

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        default:
          return <p className="">{props.children}</p>
      }
    },
  },
}

// const serializers = {
//   types: {
//     code: props => (
//       <pre data-language={props.node.language}>
//         <code>{props.node.code}</code>
//       </pre>
//     ),
//   },
// }

const BlockTextContainer = styled.div`
  img {
    width: 100%;
    padding: 20px;
  }
`

const BlockText = ({ blocks }) => (
  <BlockTextContainer>
    <BaseBlockContent
      blocks={blocks}
      imageOptions={{ w: 800, h: 500, fit: "max" }}
      projectId="qruoo0r7"
      dataset="production"
      serializers={serializers}
    />
  </BlockTextContainer>
)

export default BlockText
