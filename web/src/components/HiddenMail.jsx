export const HiddenMail = ({ text1, text2 }) => {
  return (
      <a href={`mailto:${text1}%40${text2}`} dangerouslySetInnerHTML={{ __html: `${text1}<!-- comment -->&#64;${text2}` }} />
  )
}