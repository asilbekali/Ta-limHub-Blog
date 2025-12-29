"use client";

import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Post } from "@/types/post";
import { Grid } from "@mui/material";
import PostCard from "./card";

export default function BlogList({ posts }: { posts: Post[] }) {
  const ITEMS_PER_PAGE = 9; // 3x3 grid uchun
  const [page, setPage] = useState(1);

  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;

  return (
    <div className="space-y-8 h-full bgred">
      {/* Posts Grid */}
      <Grid container spacing={6}>
        {posts.slice(start, end).map((post) => (
          <Grid key={post.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      {posts.length > ITEMS_PER_PAGE && (
        <Box className="flex justify-center">
          <Box className="glassmorphism p-4 rounded-2xl">
            <Pagination
              count={Math.ceil(posts.length / ITEMS_PER_PAGE)}
              page={page}
              onChange={(_, value) => {
                setPage(value);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              color="primary"
              size="large"
              sx={{
                '& .MuiPaginationItem-root': {
                  color: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  margin: '0 4px',
                  minWidth: '40px',
                  height: '40px',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  },
                },
                '& .MuiPaginationItem-root.Mui-selected': {
                  backgroundColor: 'rgba(139, 92, 246, 0.7)',
                  borderColor: 'rgba(139, 92, 246, 0.9)',
                  color: 'white',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: 'rgba(139, 92, 246, 0.9)',
                  },
                },
              }}
            />
          </Box>
        </Box>
      )}
    </div>
  );
}