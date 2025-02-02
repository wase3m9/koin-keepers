interface BlogArticleHeaderProps {
  title: string;
  date: string;
  author: string;
  image: string;
}

export const BlogArticleHeader = ({ title, date, author, image }: BlogArticleHeaderProps) => {
  return (
    <header className="mb-12">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">{title}</h1>
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
        <time dateTime={date}>{date}</time>
        <span>•</span>
        <span>{author}</span>
      </div>
      <img
        src={image}
        alt={title}
        className="w-full h-[400px] object-cover rounded-xl"
      />
    </header>
  );
};