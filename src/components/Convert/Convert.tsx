interface Props {
    translatedText: string;
}
const Convert = ({ translatedText }: Props) => (
    <div>
        <h1>{translatedText}</h1>
    </div>
);

export { Convert };