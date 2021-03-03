import React from 'react';
import * as promiseTracker from 'react-promise-tracker';
import { render, screen } from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';

describe('src/common/components/spinner/spinner.component.tsx', () => {
  it('should not appear the spinner when there is  not a promise in progress', async () => {
    // Arrange
    const promiseTrackerStub = jest
      .spyOn(promiseTracker, 'usePromiseTracker')
      .mockResolvedValue(false);

    // Act
    render(<SpinnerComponent />);

    const titleElements = screen.queryAllByRole('heading');
    const buttonElements = screen.queryAllByRole('button');

    // Assert
    expect(titleElements).toHaveLength(0);
    expect(buttonElements).toHaveLength(0);
  });

  it('should appear the spinner when there is a promise in progress', async () => {});
});
