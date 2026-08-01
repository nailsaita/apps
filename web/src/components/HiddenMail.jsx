export const HiddenMail = ({ mail, style, className, children }) => {
  const [text1, text2] = mail.split("@");
  if (children) //si tiene children, lo ponemos, sino ponemos el mail en el innerHTML para que no lo lea un bot
  return (
      <a href={`mailto:${text1}%40${text2}`} style={style} className={className} >
        {children}
      </a>
  )
  else
    return (
      <a href={`mailto:${text1}%40${text2}`} style={style} className={className} dangerouslySetInnerHTML={{ __html: `${text1}<!-- comment -->&#64;<!-- comment -->${text2}` }} >
        {children}
      </a>
  ) 
}