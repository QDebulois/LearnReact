export default function StoryTray({ stories }) {
  const storiesWithCreate = stories.slice();
  storiesWithCreate.push({
    id: "create",
    label: "Create Story",
  });

  return (
    <ul>
      {storiesWithCreate.map((story) => (
        <li key={story.id}>{story.label}</li>
      ))}
    </ul>
  );
}
