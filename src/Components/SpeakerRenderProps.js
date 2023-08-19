import speaker1 from "../images/african-american-business-man (1).jpg"
import speaker2 from "../images/african-american-woman-drinking-coffee-talking-phone (1).jpg"
import speaker3 from "../images/african-american-woman-happy (1).jpg"
function SpeakersRenderProps(props){

    const speakers =[
      {imageSrc: speaker1, name:"John Doe"},
      {imageSrc: speaker2, name:"Mary Doe"},
      {imageSrc: speaker3, name:"Jane Doe"}
    ];
    return props.children({
      speakers: speakers,
    });
}
export default SpeakersRenderProps