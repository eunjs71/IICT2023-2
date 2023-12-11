import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ExternalLink({
  linkText,
  url,
}: {
  linkText: string;
  url: string;
}) {
  return (
    <a href={url} className="text-blue-500" target="_blank">
      {linkText} <FontAwesomeIcon icon={faUpRightFromSquare} />
    </a>
  );
}
