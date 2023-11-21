'use client';
import { useState } from 'react';
import { Recipe } from '../../migrations/00002-createTableRecipes';

type Props = {
  recipes: Recipe[];
};
