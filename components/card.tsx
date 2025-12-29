"use client";

import * as React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton, Chip, Tooltip, Collapse } from "@mui/material";
import type { Post } from "@/types/post";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const [expanded, setExpanded] = React.useState(false);
  const [liked, setLiked] = React.useState(false);
  const [bookmarked, setBookmarked] = React.useState(false);

  const [stats, setStats] = React.useState({
    likes: Math.floor(Math.random() * 100) + 10,
    views: Math.floor(Math.random() * 500) + 50,
    comments: Math.floor(Math.random() * 30) + 5,
  });

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLikeClick = () => {
    setLiked(!liked);
    setStats((prev) => ({
      ...prev,
      likes: liked ? prev.likes - 1 : prev.likes + 1,
    }));
  };

  const handleBookmarkClick = () => {
    setBookmarked(!bookmarked);
  };

  const getCategoryColor = (id: string) => {
    const colors = [
      "from-purple-500/80 to-pink-500/80",
      "from-blue-500/80 to-cyan-500/80",
      "from-green-500/80 to-emerald-500/80",
      "from-orange-500/80 to-red-500/80",
      "from-pink-500/80 to-rose-500/80",
      "from-indigo-500/80 to-purple-500/80",
    ];
    const index = Number.parseInt(id) % colors.length;
    return colors[index];
  };

  const getCategory = (id: string) => {
    const categories =
      post.category && post.category.length > 0
        ? post.category
        : ["General", "Tech", "Life", "Travel", "Food", "Education"];
    return Array.isArray(categories) ? categories[0] : categories;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays < 1) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  };

  return (
    <article className="group relative flex flex-col h-full">
      {/* Glass Card Container */}
      <div
        className="
          relative flex flex-col h-full rounded-2xl overflow-hidden
          bg-white/10 backdrop-blur-md
          border border-white/20
          shadow-xl shadow-black/5
          transition-all duration-500 ease-out
          hover:bg-white/15 hover:shadow-2xl hover:shadow-black/10
          hover:scale-[1.02] hover:border-white/30
        "
      >
        {/* Category Badge with Glassmorphism */}
        <div className="absolute top-4 left-4 z-20">
          <Chip
            label={getCategory(String(post.id))}
            size="small"
            className={`
              bg-linear-to-r ${getCategoryColor(String(post.id))}
              backdrop-blur-xl border! border-white/30!
              shadow-lg shadow-black/20
              text-white! font-semibold!
              transition-all duration-300
              group-hover:scale-105
            `}
          />
        </div>

        {/* Image with Overlay */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="
              w-full h-full object-cover
              transition-transform duration-700 ease-out
              group-hover:scale-110
            "
          />
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

          {/* Stats Overlay - Glass Effect */}
          <div className="absolute bottom-3 right-3 flex gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/20">
              <VisibilityIcon
                sx={{ fontSize: 16, color: "rgba(255,255,255,0.9)" }}
              />
              <span className="text-xs font-medium text-white/90">
                {stats.views}
              </span>
            </div>
          </div>
        </div>

        {/* Content Section with Glass Effect */}
        <div className="flex flex-col grow p-6">
          {/* Date */}
          <div className="flex items-center gap-2 text-white mb-3">
            <CalendarTodayIcon sx={{ fontSize: 16 }} />
            <span className="text-sm font-medium">
              {formatDate(post.date)} • {getTimeAgo(post.date)}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 leading-tight group-hover:text-white transition-colors">
            {post.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-white  line-clamp-3 leading-relaxed mb-4 grow">
            {post.description}
          </p>

          {/* Divider with Glass Effect */}
          <div className="h-px bg-linear-to-r from-transparent via-white/30 to-transparent mb-4" />

          {/* Actions Bar with Glass Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              {/* Like Button */}
              <Tooltip title="Like" arrow>
                <div className="flex items-center gap-1 px-2 py-1 rounded-xl bg-white/40 backdrop-blur-sm border border-white/30 transition-all duration-300 hover:bg-white/60">
                  <IconButton
                    onClick={handleLikeClick}
                    size="small"
                    className="p-1! hover:scale-110 transition-transform"
                  >
                    {liked ? (
                      <FavoriteIcon sx={{ fontSize: 18, color: "#f43f5e" }} />
                    ) : (
                      <FavoriteBorderIcon
                        sx={{ fontSize: 18, color: "rgba(55,65,81,0.7)" }}
                      />
                    )}
                  </IconButton>
                  <span className="text-sm font-medium text-white-800 pr-1">
                    {stats.likes}
                  </span>
                </div>
              </Tooltip>
            </div>

            {/* Expand Button */}
            <Tooltip title={expanded ? "Show less" : "Show more"} arrow>
              <IconButton
                onClick={handleExpandClick}
                size="small"
                className="p-2! rounded-xl! bg-white/40! backdrop-blur-sm border! border-white/30! hover:bg-white/60! hover:scale-105 transition-all"
              >
                <ExpandMoreIcon
                  sx={{
                    fontSize: 18,
                    color: "rgba(55,65,81,0.7)",
                    transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 300ms",
                  }}
                />
              </IconButton>
            </Tooltip>
          </div>
        </div>

        {/* Expanded Content with Enhanced Glassmorphism */}
        <Collapse in={expanded} timeout={500}>
          <div className="px-6 pb-6">
            {/* Glass Separator */}
            <div className="h-px bg-linear-to-r from-transparent via-white/30 to-transparent mb-4" />

            {/* Full Content */}
            <div className="p-5 rounded-xl bg-white/30 backdrop-blur-lg border border-white/20">
              <p className="text-sm text-white-800 leading-relaxed whitespace-pre-line mb-4">
                {post.description}
              </p>

              {/* Additional Info */}
              <div className="pt-4 border-t border-white/30">
                <p className="text-xs text-white-600/80 mb-3">
                  Published: {formatDate(post.date)}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <Chip
                      label="Blog"
                      size="small"
                      className="bg-white/50! backdrop-blur-sm border! border-white/30! text-white-700!"
                    />
                    <Chip
                      label="Article"
                      size="small"
                      className="bg-white/50! backdrop-blur-sm border! border-white/30! text-white-700!"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Collapse>
      </div>
    </article>
  );
}
