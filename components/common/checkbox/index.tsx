// https://dev.to/tomdohnal/custom-checkbox-in-react-animated-and-accessible-3jk9
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { forwardRef, InputHTMLAttributes, useCallback, useState } from 'react';
import { colors } from '@/styles/colors';
import { animated, useSpring, config, useSpringRef, useChain } from 'react-spring';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ checked = false, ...props }, ref) => {
  return (
    <StyledLabel htmlFor='check'>
      <input id='check' ref={ref} type='checkbox' {...props} />
      <StyledCheckbox checked={checked}>{checked && <IconCheck />}</StyledCheckbox>
    </StyledLabel>
  );
});

export default Checkbox;

const StyledLabel = styled.label`
  cursor: pointer;

  input[type='checkbox'] {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    white-space: nowrap;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
  }
`;

const StyledCheckbox = styled.span<CheckboxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s background-color;
  border: 1px solid ${colors.gray100};
  border-radius: 4px;
  width: 22.5px;
  height: 22.5px;
  ${({ checked }) =>
    checked &&
    css`
      border: 1px solid ${colors.purple80};
      background-color: ${colors.purple100};
    `}
`;
